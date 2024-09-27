import { useState, useEffect } from 'react'
import { DashboardHeaderStyles } from './Header.styled'
import Widgets from './Widgets'

export interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <DashboardHeaderStyles scrolled={scrolled}>
      <h2>{title}</h2>
      <Widgets />
    </DashboardHeaderStyles>
  )
}
