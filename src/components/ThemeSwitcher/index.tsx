import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/Ant'
import { ThemeSwitcherStyle } from './ThemeSwitcher.style'

export default function ThemeSwitcher() {
  const [, setTheme] = useTheme()
  return (
    <ThemeSwitcherStyle>
      <Button type="primary" onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button type="primary" onClick={() => setTheme('default')}>
        Default
      </Button>
    </ThemeSwitcherStyle>
  )
}
