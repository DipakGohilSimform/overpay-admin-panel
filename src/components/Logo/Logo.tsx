/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom'
import { LightLightLogo, DarkLightLogo, DarkDarkLogo } from './Logo.styled'

export interface LogoProps {
  color: 'light-light' | 'dark-light' | 'dark-dark'
  link?: string
}

export function Logo(props: LogoProps) {
  const { color, link = '#' } = props
  if (color === 'light-light') {
    return (
      <Link to={link}>
        <LightLightLogo>
          <img src="/images/logo-light.png" alt="Overpay Logo" />
          <span>Overpay.</span>
        </LightLightLogo>
      </Link>
    )
  }
  if (color === 'dark-light') {
    return (
      <Link to={link}>
        <DarkLightLogo>
          <img src="/images/logo-dark.png" alt="Overpay Logo" />
          <span>Overpay.</span>
        </DarkLightLogo>
      </Link>
    )
  }

  return (
    <Link to={link}>
      <DarkDarkLogo>
        <img src="/images/logo-dark.png" alt="Overpay Logo" />
        <span>Overpay.</span>
      </DarkDarkLogo>
    </Link>
  )
}
