/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconBgWrapper } from '@/components/IconWithBg/IconWithBg.styled'
import { ReasonContentWrapper } from './ReasonContent.styled'

export interface ContentProps {
  text: string
  icon: React.ReactNode
  // eslint-disable-next-line react/require-default-props
  className?: string
}

export default function ReasonContent(props: ContentProps) {
  const { text, icon, className } = props
  return (
    <ReasonContentWrapper>
      <IconBgWrapper size="large" color="var(--neutral-50)" icon={icon} className={className} />
      <label>{text}</label>
    </ReasonContentWrapper>
  )
}
