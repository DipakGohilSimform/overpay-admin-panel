import { IconBgWrapper } from './IconWithBg.styled'

export interface IconWithBgProps {
  size: 'default' | 'large' | 'small'
  icon: React.ReactNode
  color: string
}

export default function IconWithBg(props: IconWithBgProps) {
  const { size = 'default', icon, color } = props

  return <IconBgWrapper size={size} icon={icon} color={color} bordered={false} />
}
