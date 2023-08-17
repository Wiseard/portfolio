import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'
import AnimateLayout from './components/Animations/AnimateLayout'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <AnimateLayout />
      <Sidebar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
export default App
