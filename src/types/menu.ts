export type DrinkCategory = 'Signature' | 'Espresso' | 'Cold' | 'Non-Coffee' | 'Tea'

export type Drink = {
  id: string
  name: string
  category: DrinkCategory
  image: string
  description: string
  tastingNotes: string[]
  ingredients: string[]
  tags: string[]
  intensity: 1 | 2 | 3 | 4 | 5
  caffeineMg?: number
  priceUsd: number
}
