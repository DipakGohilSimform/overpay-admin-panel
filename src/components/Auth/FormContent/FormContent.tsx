import { FormWrapper } from './FormContent.styled'
import { FormHeading } from './FormHeading/FormHeading'

export interface FormProps {
  title: string
  subtitle: string
  children?: React.ReactNode
  formChildren?: React.ReactNode
}

export function FormContent(props: FormProps) {
  const { title, subtitle, children, formChildren } = props
  return (
    <FormWrapper>
      <FormHeading title={title} subtitle={subtitle}>
        {children}
      </FormHeading>
      {formChildren}
    </FormWrapper>
  )
}
FormContent.defaultProps = {
  children: null,
  formChildren: null
}
