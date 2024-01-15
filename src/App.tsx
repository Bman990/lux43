
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
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="kitchen" element={<KitchenGallery />} />
        <Route path="bathroom" element={<BathroomGallery />} />
        <Route path="patio" element={<PatioGallery />} />
        <Route path="livingroom" element={<LivingRoomGallery />} />
        <Route path="bedroom" element={<BedroomGallery />} />
      </Routes>
    </>
  )
}

export default App
