import type { Meta, StoryObj } from '@storybook/react'
import { CollapseProps } from 'antd'
import { Collapse } from '.'

const meta: Meta<typeof Collapse> = {
  title: 'Ant Design/Collapse',
  tags: ['autodocs'],
  argTypes: {
    accordion: { control: 'boolean' },
    bordered: { control: 'boolean' },
    collapsible: { control: 'radio', options: ['header', 'icon', 'disabled'] },
    destroyInactivePanel: { control: 'boolean' },
    expandIconPosition: { control: 'radio', options: ['start', 'end'] },
    ghost: { control: 'boolean' },
    size: { control: 'radio', options: ['large', 'middle', 'small'] }
  },
  component: Collapse
}

export default meta

type Story = StoryObj<typeof Collapse>

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>
  }
]

export const Demo: Story = {
  args: {
    accordion: false,
    bordered: false,
    destroyInactivePanel: false,
    ghost: false
  },
  render: (args) => <Collapse {...args} items={items} defaultActiveKey={['1']} />
}
