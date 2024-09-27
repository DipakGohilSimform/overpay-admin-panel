import { Button } from '@/components/Ant'
import { HeaderWrapper } from './InvoiceHeader.styled'

export default function InvoiceHeader() {
  return (
    <HeaderWrapper>
      <h4>New Invoices: INV111XXX</h4>
      <Button className="invoice-btn">Save Draft</Button>
    </HeaderWrapper>
  )
}
