import React from 'react'
import { ContryRow } from '../MyWallet.styled'
import Currency from '@/components/Table/Currency'
import { Checkbox } from '@/components/Ant'

interface ModalContryRowType {
  img: string
  val: string
}
export default function ModalContryRow({ img, val }: ModalContryRowType) {
  return (
    <ContryRow gap={20} justify="space-between">
      <Currency img={img} value={val} /> <Checkbox />
    </ContryRow>
  )
}
