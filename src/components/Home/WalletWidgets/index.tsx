import { WidgetWrappper } from './WalletWidgets.styled'

export interface WidgetProps {
  icon: React.ReactNode
  title: string
}

export default function WalletWidgets({ icon, title }: WidgetProps) {
  return (
    <WidgetWrappper>
      <div className="iconContainer">{icon}</div>
      <span>{title}</span>
    </WidgetWrappper>
  )
}
