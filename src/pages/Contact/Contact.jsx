import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimateSection from '../../components/Animations/AnimateSection'
import AnimateTitle from '../../components/Animations/AnimateTitle'
import { useGlobalContext } from '../../context/global_context'
import './contact.css'
import Seo from '../../components/SEO/Seo'

const Contact = () => {
  const { setChangePage } = useGlobalContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formConfirmed, setFormConfirmed] = useState(false)
  const form = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3kaqtft',
        'template_kflquki',
        form.current,
        '6BLdInWYK8y_pfV8J'
      )
      .then(
        (result) => {
          // console.log(result.text)
          setFormConfirmed(true)
          setName('')
          setEmail('')
          setMessage('')
          setTimeout(() => setFormConfirmed(false), 10000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  useEffect(() => {
    setChangePage(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo
        title="Florent Baleinier - Contact"
        description="Need a beautiful, well-structured website ? Get in touch."
        name="Florent Baleinier"
        type="website"
      />

      <AnimateSection name="container contact-container">
        <div className="contact grid">
          {/* about content */}
          <div className="contact-content">
            <AnimateTitle
              name="contact-header"
              duration={1}
              transitionDelay={0.8}
            >
              Hello.
            </AnimateTitle>
            <div className="contact-socials">
              <p>
                Wether you're looking to collaborate, if you have a project in
                mind or are simply interested in finding out more, get in touch
                and let’s get things moving.
              </p>
              <p>
                Email:&nbsp;
                <a href="mailto:florentbaleinier@gmail.com" target="_blank">
                  florentbaleinier@gmail.com
                </a>
              </p>
              <p>
                My socials:&nbsp;
                <a
                  href="http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/"
                  target="_blank"
                >
                  Linkedin
                </a>
                &nbsp;/&nbsp;
                <a href="https://github.com/Wiseard" target="_blank">
                  Github
                </a>
              </p>
            </div>
          </div>
          {/* contact form */}
          <div className="form-container">
            <h3>Let's talk</h3>
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={formConfirmed}
              />
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={formConfirmed}
              />
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message*"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={formConfirmed}
              />
              <button
                type="submit"
                className="btn-contact-submit"
                disabled={formConfirmed}
              >
                send
              </button>
            </form>
            {formConfirmed && (
              <div className="form-confirmation">
                <AnimateTitle
                  name="message-confirmation-title"
                  tags="h3"
                  duration={1}
                  transitionDelay={0}
                >
                  Thank you for your message!
                  <br /> I'll come back to you within 48 hours.
                </AnimateTitle>
              </div>
            )}
          </div>
        </div>
      </AnimateSection>
    </>
  )
}
export default Contact
