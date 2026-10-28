import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FlavorMarquee from './components/FlavorMarquee'
import Collection from './components/Collection'
import Atelier from './components/Atelier'
import CakeBuilder from './components/CakeBuilder'
import Steps from './components/Steps'
import Feed from './components/Feed'
import OrderDrawer from './components/OrderDrawer'
import Footer from './components/Footer'
import { useCart } from './hooks/useCart'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll(-110)
  useReveal()
  const order = useCart()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const addCustomAndShow = (product) => {
    order.add(product)
    setDrawerOpen(true)
  }

  return (
    <>
      <Header count={order.count} onOpenOrder={() => setDrawerOpen(true)} />
      <main>
        <Hero />
        <FlavorMarquee />
        <Collection onAdd={order.add} />
        <Atelier />
        <CakeBuilder onAdd={addCustomAndShow} />
        <Steps />
        <Feed />
      </main>
      <Footer />
      <OrderDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} order={order} />
    </>
  )
}
