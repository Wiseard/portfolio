import { motion as m, useAnimationControls } from 'framer-motion'
import {
  animateLayoutStyleTop,
  animateLayoutStyleBottom,
} from '../../utils/constants'
import { useEffect } from 'react'
import { useGlobalContext } from '../../context/global_context'

const AnimateLayout = ({ layoutStyle }) => {
  const controls = useAnimationControls()
  const { changePage } = useGlobalContext()

  layoutStyle = changePage ? animateLayoutStyleTop : animateLayoutStyleBottom

  useEffect(() => {
    controls.start({ height: ['100%', '0%'] })
  }, [changePage])

  return (
    <m.div
      className={`layout ${changePage ? 'bg-layout' : ''}`}
      style={layoutStyle}
      initial={{ height: '100%' }}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: [0.61, 0, 0.4, 1],
      }}
    ></m.div>
  )
}
export default AnimateLayout
