import type { Meta, StoryObj } from '@storybook/react'
import ThemeSwitcher from '.'

const ThemeSwitcherStory: Meta<typeof ThemeSwitcher> = {
  title: 'Custom/Theme Switcher',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  component: ThemeSwitcher
}

export default ThemeSwitcherStory

type Story = StoryObj<typeof ThemeSwitcher>

export const ThemeSwitcherDemo: Story = {}
