import { StatusTag } from './Status.styled'

export interface StatusProps {
  color: string
  text: string
}
export default function Status({ color, text }: StatusProps) {
  return (
    <StatusTag bordered={false} color={color}>
      {text}
    </StatusTag>
  )
}
