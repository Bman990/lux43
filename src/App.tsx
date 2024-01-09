
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './assets/Components/Home'
import { KitchenGallery } from './assets/Components/KitchenGallery'
import { LivingRoomGallery } from './assets/Components/LivingRoomGallery'
import { BathroomGallery } from './assets/Components/BathroomGallery'
import { PatioGallery } from './assets/Components/PatioGallery'
import { BedroomGallery } from './assets/Components/BedroomGallery'
import { Contact } from './assets/Components/Contact'

function App() {


  return (
    <>
      <Routes>
        <Route path="/lux43/" element={<Home />} />
        <Route path="/lux43/contact" element={<Contact />} />
        <Route path="/lux43/kitchen" element={<KitchenGallery />} />
        <Route path="/lux43/bathroom" element={<BathroomGallery />} />
        <Route path="/lux43/patio" element={<PatioGallery />} />
        <Route path="/lux43/livingroom" element={<LivingRoomGallery />} />
        <Route path="/lux43/bedroom" element={<BedroomGallery />} />
      </Routes>
    </>
  )
}

export default App
