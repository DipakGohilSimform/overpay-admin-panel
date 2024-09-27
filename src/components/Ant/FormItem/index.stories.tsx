import type { Meta, StoryObj } from '@storybook/react'
import { FormItem } from '.'
import { Input } from '../index'

const FormItemStory: Meta<typeof FormItem> = {
  title: 'Ant Design/FormItem',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' }
  },
  component: FormItem
}

export default FormItemStory

type Story = StoryObj<typeof FormItem>

export const FormItemDemo: Story = {
  args: {
    label: 'Input Field',
    required: false
  },
  render: (args) => (
    <FormItem label={args.label} required={args.required}>
      <Input placeholder="Input placeholder" />
    </FormItem>
  )
}
