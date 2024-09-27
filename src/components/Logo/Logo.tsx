import { LightLightLogo, DarkLightLogo, DarkDarkLogo } from './Logo.styled'

export interface LogoProps {
  color: 'light-light' | 'dark-light' | 'dark-dark'
}

export function Logo(props: LogoProps) {
  const { color } = props
  if (color === 'light-light') {
    return (
      <LightLightLogo>
        <img src="/images/logo-light.png" alt="Overpay Logo" />
        <span>Overpay.</span>
      </LightLightLogo>
    )
  }
  if (color === 'dark-light') {
    return (
      <DarkLightLogo>
        <img src="/images/logo-dark.png" alt="Overpay Logo" />
        <span>Overpay.</span>
      </DarkLightLogo>
    )
  }

  return (
    <DarkDarkLogo>
      <img src="/images/logo-dark.png" alt="Overpay Logo" />
      <span>Overpay.</span>
    </DarkDarkLogo>
  )
}
