import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const ButtonStory: Meta<typeof Button> = {
  title: 'Ant Design/Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'dashed', 'link', 'text', 'default']
    },
    size: { control: 'radio', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    danger: { control: 'boolean' },
    ghost: { control: 'boolean' },
    block: { control: 'boolean' },
    icon: { control: HTMLElement }
  },
  component: Button
}

export default ButtonStory

type Story = StoryObj<typeof Button>

export const ButtonDemo: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'middle',
    disabled: false,
    loading: false,
    danger: false,
    ghost: false,
    block: false
  }
}
