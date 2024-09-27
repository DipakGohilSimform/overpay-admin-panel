/* eslint-disable jsx-a11y/label-has-associated-control */
import { DateTimeContainer } from './DateWithTime.styled'

export interface DateProps {
  date: string
  // eslint-disable-next-line react/require-default-props
  time?: string
}

export default function DateWithTime({ date, time }: DateProps) {
  return (
    <DateTimeContainer>
      <label>{date}</label>
      <span>{time}</span>
    </DateTimeContainer>
  )
}
