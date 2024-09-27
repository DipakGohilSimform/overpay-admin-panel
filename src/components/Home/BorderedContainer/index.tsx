/* eslint-disable react/require-default-props */
import { ParentWrapper } from './BorderedContainer.styled'

export interface ContainerProps {
  children?: React.ReactNode
  headingChildren?: React.ReactNode
  title: string
  className?: string
}
export default function BorderedContainer({
  children,
  title,
  headingChildren,
  className
}: ContainerProps) {
  return (
    <ParentWrapper className={`${className} mb-32`}>
      <div className="heading-content">
        <h6>{title}</h6>
        {headingChildren}
      </div>
      {children}
    </ParentWrapper>
  )
}
