import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { nav } from '../../utils/constants'
import { useGlobalContext } from '../../context/global_context'
import AnimateTitle from '../../components/Animations/AnimateTitle'
import AnimateSection from '../../components/Animations/AnimateSection'
import './home.css'

const Home = () => {
  const { setChangePage } = useGlobalContext()
  return (
    <AnimateSection name="container home-container grid">
      {/* home header */}
      <div className="home-header">
        <AnimateTitle duration={0.6} transitionDelay={0.6}>
          florent baleinier
        </AnimateTitle>
        <AnimateTitle tags="h3" duration={0.6} transitionDelay={0.7}>
          Web Developer / React
        </AnimateTitle>
        <AnimateTitle tags="h3" duration={0.6} transitionDelay={0.7}>
          Currently working as a freelancer
        </AnimateTitle>
      </div>
      {/* home navigation */}
      <div className="home-navigation">
        {
          <ul className="home-navigation-list">
            {nav.map(({ id, name, url }) => {
              return (
                <m.li
                  key={id + url}
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                    ease: [0.61, 0, 0.4, 1],
                  }}
                >
                  <Link to={url} onClick={() => setChangePage(true)}>
                    {name}
                  </Link>
                </m.li>
              )
            })}
          </ul>
        }
      </div>
    </AnimateSection>
  )
}
export default Home
