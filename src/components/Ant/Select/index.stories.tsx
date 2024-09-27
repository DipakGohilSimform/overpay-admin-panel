import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'

const SelectStory: Meta<typeof Select> = {
  title: 'Ant Design/Select',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    placeholder: { control: 'text' }
  },
  component: Select
}

export default SelectStory

type Story = StoryObj<typeof Select>

export const SelectDemo: Story = {
  args: {
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ],
    placeholder: 'Select an option',
    size: 'middle',
    disabled: false,
    loading: false
  }
}
