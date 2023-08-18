import AnimateSection from '../../components/Animations/AnimateSection'
import AnimateTitle from '../../components/Animations/AnimateTitle'
import { useGlobalContext } from '../../context/global_context'
import { projects } from '../../utils/constants'
import { useEffect } from 'react'
import './work.css'
import Seo from '../../components/SEO/Seo'

const Work = () => {
  const { setChangePage } = useGlobalContext()

  useEffect(() => {
    setChangePage(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo
        title="Florent Baleinier - Work"
        description=" This is a showcase of my latest projects built with React, which
              is the framework I'm using daily.."
        name="Florent Baleinier"
        type="website"
      />

      <AnimateSection name="container work-container">
        <div className="work grid">
          {/* work content */}
          <div className="work-header">
            <AnimateTitle
              name="about-title"
              duration={0.3}
              transitionDelay={0.8}
            >
              Work
            </AnimateTitle>
            <AnimateTitle
              tags="h3"
              name="about-title"
              duration={0.5}
              transitionDelay={0.8}
            >
              This is a showcase of my latest projects built with React, which
              is the framework I'm using daily. Click on the one you want to
              discover the demo.
            </AnimateTitle>
            <AnimateTitle
              tags="h3"
              name="about-title"
              duration={0.5}
              transitionDelay={0.8}
            >
              Web development is constantly evolving and so as my role as a
              front-end developer. I'm still learning and gaining experience
              every day.
            </AnimateTitle>
          </div>
          {/* work project list */}
          <div className="work-project-list-container">
            {projects.map(
              ({ id, title, description, project_number: number, url }) => {
                return (
                  <div key={id + title} className="work-project-list">
                    <a href={url} target="_blank">
                      {title}
                    </a>
                    <h4>
                      <span>{number} - </span>
                      {description}
                    </h4>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </AnimateSection>
    </>
  )
}
export default Work
