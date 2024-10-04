import { Button, InputSearch } from '@/components/Ant'
import { EditInvocie, Filter, Search } from '@/components/Icons'
import { ActionWrapper } from '@/components/Transactions/TransactionAction/TransactionAction.styled'

export default function InvoiceAction() {
  return (
    <ActionWrapper>
      <InputSearch prefix={<Search />} placeholder="Search invoice..." />
      <div className="actions-btn-container">
        <Button type="primary" icon={<EditInvocie />} href="create">
          Create invoice
        </Button>
        <Button type="default" icon={<Filter />}>
          Filters
        </Button>
      </div>
    </ActionWrapper>
  )
}
