import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '.'
import { FormItem, Input, InputPassword, Button } from '../index'

const FormStory: Meta<typeof Form> = {
  title: 'Ant Design/Form',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'radio', options: ['horizontal', 'vertical'] }
  },
  component: Form
}

export default FormStory

type Story = StoryObj<typeof Form>

export const FormDemo: Story = {
  args: {
    layout: 'vertical'
  },
  render: (args) => (
    <Form layout={args.layout}>
      <FormItem label="Email" required>
        <Input placeholder="input placeholder" />
      </FormItem>
      <FormItem label="Password" required>
        <InputPassword placeholder="input placeholder" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </FormItem>
    </Form>
  )
}
