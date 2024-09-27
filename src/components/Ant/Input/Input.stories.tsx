import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const InputStory: Meta<typeof Input> = {
  title: 'Ant Design/Input',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    allowClear: { control: 'boolean' },
    size: { control: 'select', options: ['large', 'middle', 'small'] },
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  component: Input
}

export default InputStory

type InputStoryType = StoryObj<typeof Input>

export const InputDemo: InputStoryType = {
  args: {
    allowClear: true,
    size: 'middle',
    maxLength: 10,
    placeholder: 'Passowrd Input Field',
    disabled: false
  }
}
