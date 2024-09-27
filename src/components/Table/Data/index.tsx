import { DataItem } from './Data.styled'

export interface DataProps {
  text: string
}

export default function Data({ text }: DataProps) {
  return <DataItem>{text}</DataItem>
}
