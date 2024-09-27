import { SocialButtonWrapper } from './SocialButton.styled'

export interface ButtonProps {
  text: string
  icon: React.ReactNode
}

export function SocialButton(props: ButtonProps) {
  const { text, icon } = props
  return (
    <SocialButtonWrapper icon={icon} iconPosition="start">
      {text}
    </SocialButtonWrapper>
  )
}
