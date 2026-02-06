import About from './components/About'
import Checkout from './components/Checkout'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Locations from './components/Locations'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen text-crema antialiased">
            <Navbar />

            <main>
              <Hero />
              <About />
              <Menu />
              <Locations />
              <Contact />
            </main>

            <Footer />
          </div>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
