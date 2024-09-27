import BorderedContainer from '@/components/Home/BorderedContainer'
import { CreateContent, InvoiceContainer } from './CreateInvoice.styled'
import InvoiceHeader from './InvoiceHeader'
import InvoiceInput from './InvoiceInput'
import { Button, Divider } from '@/components/Ant'
import { EyeOpen, File } from '@/components/Icons'
import BillingDetails from './InvoiceBilling/BillingDetails'
import InvoiceTable from './InvoiceTable'
import TotalDetails from './TotalDetails'

export default function CreateInvoice() {
  return (
    <InvoiceContainer>
      <InvoiceHeader />
      <CreateContent>
        <div className="invoice-items">
          <BillingDetails />
          <InvoiceTable />
          <Divider />
          <TotalDetails />
        </div>
        <div className="invoice-info">
          <BorderedContainer title="Basic Info" className="invoice-content">
            <InvoiceInput />
          </BorderedContainer>
          <Button type="primary" block>
            Send Invoice
          </Button>
          <div className="input-action-btns">
            <Button className="invoice-btn" icon={<EyeOpen />}>
              Preview
            </Button>
            <Button className="invoice-btn" icon={<File />}>
              Download
            </Button>
          </div>
        </div>
      </CreateContent>
    </InvoiceContainer>
  )
}
