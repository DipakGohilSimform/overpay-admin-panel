import { HeadingWrapper } from './FormHeading.styled'

export interface HeadingProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}
export function FormHeading(props: HeadingProps) {
  const { title, subtitle, children } = props
  return (
    <HeadingWrapper>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {children}
    </HeadingWrapper>
  )
}

FormHeading.defaultProps = {
  children: null
}
