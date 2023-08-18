import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router'
import { useLocation } from 'react-router'
import { Home, About, Contact, Work, Error404 } from './pages/index'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
