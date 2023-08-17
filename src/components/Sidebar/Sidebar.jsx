import { motion as m } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'
import { socials } from '../../utils/constants'
import { useGlobalContext } from '../../context/global_context'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  const { changePage, setChangePage } = useGlobalContext()
  const isTablet = useMediaQuery('(max-width:770px)')
  const variants = isTablet
    ? {
        initial: {
          height: '1px',
          width: '0%',
        },
        animate: {
          width: '40%',
        },
      }
    : {
        initial: {
          height: '0%',
          width: '1px',
        },
        animate: {
          height: '40%',
        },
      }

  return (
    <aside className={`sidebar ${changePage ? 'sidebar-bg' : ''}`}>
      {changePage ? (
        <Link
          to="/"
          className="sidebar-home"
          onClick={() => setChangePage(false)}
        >
          home
        </Link>
      ) : (
        <ul className="sidebar-social-links">
          {socials.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      )}
      <m.div
        variants={variants}
        initial={variants.initial}
        animate={variants.animate}
        transition={{ duration: 0.8 }}
        className="sidebar-underline "
      ></m.div>
      <p>&copy;{new Date().getFullYear()}</p>
    </aside>
  )
}
export default Sidebar
