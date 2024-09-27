import { Calendar } from '@/components/Icons'
import { DateContainer } from './DateWithCalendar.styled'

export interface DateProps {
  date: string
}

export default function DateWithCalendar({ date }: DateProps) {
  return (
    <DateContainer>
      <Calendar /> <span>{date}</span>
    </DateContainer>
  )
}
