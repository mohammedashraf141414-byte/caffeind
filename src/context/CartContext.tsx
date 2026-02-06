import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

import type { Drink } from '../types/menu'

type CartItem = {
  drink: Drink
  quantity: number
}

type CartState = {
  items: CartItem[]
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotalUsd: number
  addItem: (drink: Drink, quantity?: number) => void
  removeItem: (drinkId: string) => void
  setQuantity: (drinkId: string, quantity: number) => void
  clear: () => void
}

type CartAction =
  | { type: 'ADD_ITEM'; drink: Drink; quantity: number }
  | { type: 'REMOVE_ITEM'; drinkId: string }
  | { type: 'SET_QUANTITY'; drinkId: string; quantity: number }
  | { type: 'CLEAR' }

const STORAGE_KEY = 'caffeind_cart_v1'

const CartContext = createContext<CartContextValue | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.drink.id === action.drink.id)

      if (!existing) {
        return {
          items: [...state.items, { drink: action.drink, quantity: action.quantity }],
        }
      }

      return {
        items: state.items.map((i) =>
          i.drink.id === action.drink.id
            ? { ...i, quantity: i.quantity + action.quantity }
            : i,
        ),
      }
    }

    case 'REMOVE_ITEM': {
      return { items: state.items.filter((i) => i.drink.id !== action.drinkId) }
    }

    case 'SET_QUANTITY': {
      const qty = Math.max(1, Math.floor(action.quantity))
      return {
        items: state.items.map((i) =>
          i.drink.id === action.drinkId ? { ...i, quantity: qty } : i,
        ),
      }
    }

    case 'CLEAR': {
      return { items: [] }
    }

    default: {
      return state
    }
  }
}

function readInitialCart(): CartState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { items: [] }

    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return { items: [] }

    const items: CartItem[] = []

    for (const entry of parsed) {
      if (!entry || typeof entry !== 'object') continue

      const maybe = entry as { drink?: unknown; quantity?: unknown }
      if (!maybe.drink || typeof maybe.quantity !== 'number') continue

      items.push({ drink: maybe.drink as Drink, quantity: maybe.quantity })
    }

    return { items }
  } catch {
    return { items: [] }
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, readInitialCart)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  const addItem = useCallback((drink: Drink, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', drink, quantity })
  }, [])

  const removeItem = useCallback((drinkId: string) => {
    dispatch({ type: 'REMOVE_ITEM', drinkId })
  }, [])

  const setQuantity = useCallback((drinkId: string, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', drinkId, quantity })
  }, [])

  const clear = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const count = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items],
  )

  const subtotalUsd = useMemo(
    () =>
      state.items.reduce(
        (sum, item) => sum + item.drink.priceUsd * item.quantity,
        0,
      ),
    [state.items],
  )

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      count,
      subtotalUsd,
      addItem,
      removeItem,
      setQuantity,
      clear,
    }),
    [addItem, clear, count, removeItem, setQuantity, state.items, subtotalUsd],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export type { CartItem }
