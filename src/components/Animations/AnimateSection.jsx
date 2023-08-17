import { motion as m } from 'framer-motion'
import { animateSectionStyle } from '../../utils/constants'

const AnimateSection = ({
  name,
  children,
  sectionStyle = animateSectionStyle,
}) => {
  return (
    <m.section
      className={name}
      style={sectionStyle}
      initial={{ visibility: 'hidden' }}
      animate={{ visibility: 'visible' }}
      exit={{ visibility: 'hidden' }}
      transition={{ duration: 1, ease: [0.17, 0.67, 0.37, 1] }}
    >
      {children}
    </m.section>
  )
}
export default AnimateSection
