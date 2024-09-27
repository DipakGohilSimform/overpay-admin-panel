import type { Meta, StoryObj } from '@storybook/react'
import { MenuProps } from 'antd'
import { Menu } from '.'

const items: MenuProps['items'] = [<>1. </>, <>2. </>, <>3. </>].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon,
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

const MenuStory: Meta<typeof Menu> = {
  title: 'Ant Design/Menu',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'radio', options: ['horizontal', 'vertical', 'inline'] }
  },
  component: Menu
}

export default MenuStory

type Story = StoryObj<typeof Menu>

export const MenuDemo: Story = {
  args: {
    mode: 'horizontal',
    items
  }
}
