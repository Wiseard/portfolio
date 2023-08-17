import { motion as m } from 'framer-motion'
import { animateTitleStyle } from '../../utils/constants'

const AnimateTitle = ({
  tags = 'h2',
  children,
  style = animateTitleStyle,
  transitionDelay,
  duration,
}) => {
  return (
    <div className="title-container" style={style}>
      {tags === 'h3' ? (
        <m.h3
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: transitionDelay,
            duration: duration,
            ease: [0.61, 0, 0.4, 1],
          }}
        >
          {children}
        </m.h3>
      ) : (
        <m.h2
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: transitionDelay,
            duration: duration,
            ease: [0.61, 0, 0.4, 1],
          }}
        >
          {children}
        </m.h2>
      )}
    </div>
  )
}
export default AnimateTitle
