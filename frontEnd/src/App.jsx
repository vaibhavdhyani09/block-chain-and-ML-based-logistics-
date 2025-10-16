import { useState } from 'react'
import Navbar from './components/Navbar'
import TrackingInput from './components/TrackingInput'
import TruckGame from './components/TruckGame'
import Footer from './components/Footer';
import InfiniteStrip from './components/Cards';
import InfinityBanners from './components/Slider';
import GlassCard from './components/Glass';
import FlipCards from './components/FlipCards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <TrackingInput />
      <InfiniteStrip/>
      <InfinityBanners/>
      {/* <GlassCard/> */}
      <FlipCards/>
      <TruckGame/>
      <Footer/>
    </>
  )
}

export default App
