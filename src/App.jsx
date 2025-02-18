import { Canvas } from '@react-three/fiber'
import './App.css'
import { Model } from './component/Three/Box'
import Experience from './component/Experience'
import Floor from './component/Floor'
import { HashRouter , Route , Routes } from 'react-router-dom'
import SuratPage from './component/SuratPage'

function ThreeDScene() {
  return (
    <div className='container'>
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 80 }}>
      <Experience />
      <Floor />
    </Canvas>
    </div>
  )
}
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ThreeDScene />} />
        <Route path="/surat" element={<SuratPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
