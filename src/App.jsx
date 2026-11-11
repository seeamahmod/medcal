import Hero from './sections/Hero'
import About from './sections/About'
import Trending from './sections/Trending'
import Hospitals from './sections/Hospitals'
import Offers from './sections/Offers'
import Products from './sections/Products'
import HotOffer from './sections/HotOffer'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className="mx-auto w-full overflow-x-clip">
      <Hero />
      <About />
      <Trending />
      <Hospitals />
      <Offers />
      <Products />
      <HotOffer />
      <Testimonials />
      <Footer />
    </main>
  )
}
