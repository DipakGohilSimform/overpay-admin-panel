import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '.'

const meta: Meta<typeof Carousel> = {
  title: 'Ant Design/Carousel',

  tags: ['autodocs'],
  argTypes: {
    autoplay: { control: 'boolean' },
    dots: { control: 'boolean' },
    fade: { control: 'boolean' },
    infinite: { control: 'boolean' },
    effect: { control: 'radio', options: ['scrollx', 'fade'] },
    dotPosition: { control: 'radio', options: ['bottom', 'left', 'right'] },
    waitForAnimate: { control: 'boolean' }
  },
  component: Carousel
}

export default meta

type Story = StoryObj<typeof Carousel>

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

export const Demo: Story = {
  args: {
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    waitForAnimate: true,
    autoplaySpeed: 1000,
    speed: 1000,
    dotPosition: 'right'
  },
  render: (args) => (
    <Carousel {...args} style={{ height: '100%' }}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}
