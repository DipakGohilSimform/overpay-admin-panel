import IconWithBg from '@/components/IconWithBg'
import { LinkContainer } from './Links.styled'

export interface LinkProps {
  icon: React.ReactNode
  text: string
  onClick: () => void
}

export default function Links({ icon, text, onClick }: LinkProps) {
  return (
    <LinkContainer onClick={onClick}>
      <IconWithBg size="small" icon={icon} color="blue" />
      <span>{text}</span>
    </LinkContainer>
  )
}
