import { nanoid } from 'nanoid'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

export const nav = [
  {
    id: nanoid(),
    name: 'work',
    url: '/work',
  },
  {
    id: nanoid(),
    name: 'about',
    url: '/about',
  },
  {
    id: nanoid(),
    name: 'contact',
    url: '/contact',
  },
]

export const socials = [
  {
    id: nanoid(),
    icon: <AiFillGithub />,
    url: 'https://github.com/Wiseard',
  },
  {
    id: nanoid(),
    icon: <AiFillLinkedin />,
    url: 'http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/',
  },
  {
    id: nanoid(),
    icon: <BiLogoGmail />,
    url: 'mailto:florentbaleinier@gmail.com',
  },
]

export const projects = [
  {
    id: nanoid(),
    title: 'Trendy Shop',
    url: 'https://trendy-eshop.netlify.app',
    git: 'https://github.com/Wiseard/trendy-shop.git',
    description: "women's clothing store",
    project_number: '01',
  },
  {
    id: nanoid(),
    title: 'Comfy Sloth',
    url: 'https://react-course-comfy-sloth-store.netlify.app',
    git: 'https://github.com/Wiseard/react-project-ecommerce.git',
    description: 'home furniture store',
    project_number: '02',
  },
  {
    id: nanoid(),
    title: 'Emerald Blues',
    url: 'https://emerald-fine-dining.netlify.app',
    git: 'https://github.com/Wiseard/emerald-blues-restaurant.git',
    description: 'restaurant showcase',
    project_number: '03',
  },
]

// Components styles

export const animateTitleStyle = {
  width: 'fit-content',
  position: 'relative',
  overflow: 'hidden',
}

export const animateSectionStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'auto',
}

export const animateLayoutStyleBottom = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '0%',
}

export const animateLayoutStyleTop = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '0%',
}
