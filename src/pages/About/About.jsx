import { useEffect } from 'react'
import AnimateSection from '../../components/Animations/AnimateSection'
import AnimateTitle from '../../components/Animations/AnimateTitle'
import { useGlobalContext } from '../../context/global_context'
import './about.css'

const About = () => {
  const { setChangePage } = useGlobalContext()
  useEffect(() => {
    setChangePage(true)
  }, [])

  return (
    <AnimateSection name="container about-container">
      <div className="about grid">
        {/* about content */}
        <div className="about-content">
          <AnimateTitle name="about-title" duration={1} transitionDelay={0.8}>
            About
          </AnimateTitle>
          <div className="about-header">
            <h3>I'm Florent. A front-end developer and problem solver.</h3>
          </div>
          <div className="about-desc">
            <p>
              As a Digital Marketing graduate , web development has always been
              part of my work. Social media strategies, SEO improvements and
              websites content updates were my daily routines.
            </p>
            <p>
              Fast forward to 2023 and I’ve tried it all, from HTML/CSS, PHP,
              No-Code Web Development. Everything I have done, small or big, has
              been a vital stepping stone for where I am today.
            </p>
            <p>
              What excites me most about being a web designer is being able to
              create things that have purpose and solve real problems. It goes
              beyond just creating functional websites and involves having a
              passion for designing experiences and solutions that help people.
            </p>
          </div>
        </div>
        {/* about quote */}
        <div className="about-quote">
          <blockquote>
            <p>
              “What separates design from art is that design is meant to be…
              functional.”
            </p>
            <footer>—Cameron Moll</footer>
          </blockquote>
        </div>
      </div>
    </AnimateSection>
  )
}
export default About
