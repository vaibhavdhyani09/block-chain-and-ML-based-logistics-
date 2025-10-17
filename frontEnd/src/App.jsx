import { useState } from 'react'

import Navbar from './components/Navbar'
import TrackingInput from './components/TrackingInput'
import TruckGame from './components/TruckGame'
import Footer from './components/Footer';
import InfiniteStrip from './components/Cards';
import InfinityBanners from './components/Slider';
import GlassCard from './components/Glass';
import FlipCards from './components/FlipCards';
import ShipmentBlockchain from './components/ShipmentBlockchain';
import WarehouseUpload from './components/WarehouseUploads';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TrackingInput />
      <InfiniteStrip />
      <InfinityBanners />
      <FlipCards />
      {/* <WarehouseUpload /> */}
      <ShipmentBlockchain/>
      <TruckGame />
      <Footer />
    </>
  )
}

export default App
