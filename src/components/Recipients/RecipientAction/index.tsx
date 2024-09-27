import { Button, InputSearch } from '@/components/Ant'
import { Filter, Plus, Search } from '@/components/Icons'
import { ActionWrapper } from '@/components/Transactions/TransactionAction/TransactionAction.styled'

export default function RecipientAction() {
  return (
    <ActionWrapper>
      <InputSearch prefix={<Search />} placeholder="Search by recipients..." />
      <div className="actions-btn-container">
        <Button type="primary" icon={<Plus />}>
          Add New
        </Button>
        <Button type="default" icon={<Filter />}>
          Filters
        </Button>
      </div>
    </ActionWrapper>
  )
}
