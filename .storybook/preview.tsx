import React, { useEffect } from 'react'
import { addons } from '@storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { ThemeProvider, useTheme } from '../src/context/ThemeContext'

const channel = addons.getChannel()

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const [, setTheme] = useTheme()
  const handleColorScheme = (value: boolean) => setTheme(value ? 'dark' : 'default')
  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
  }, [channel])
  return <>{children}</>
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <ThemeProvider>{renderStory()}</ThemeProvider>
]
