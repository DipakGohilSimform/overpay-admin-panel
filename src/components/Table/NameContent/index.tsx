import { NameWrapper } from './NameContent.styled'

export interface NameProps {
  icon: React.ReactNode
  name: string
  // eslint-disable-next-line react/require-default-props
  action?: string
}

export default function NameContent({ icon, name, action }: NameProps) {
  return (
    <NameWrapper>
      {icon}
      <div className="name-wrapper">
        <p>{name}</p>
        <span>{action}</span>
      </div>
    </NameWrapper>
  )
}
