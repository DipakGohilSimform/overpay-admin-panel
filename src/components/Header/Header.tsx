import { useState, useEffect } from 'react'
import { DashboardHeaderStyles } from './Header.styled'
import Widgets from './Widgets'
import { Button } from '../Ant'
import { Hamburger } from '../Icons'

export interface HeaderProps {
  title: string
  setCollapsed: (collapsed: boolean) => void
  collapsed: boolean
}

export default function Header({ title, setCollapsed, collapsed }: HeaderProps) {
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
      <div className="left">
        <Button
          type="text"
          icon={<Hamburger />}
          className="hamburger-close"
          onClick={() => setCollapsed(!collapsed)}
        />
        <h2>{title}</h2>
      </div>
      <Widgets />
    </DashboardHeaderStyles>
  )
}
