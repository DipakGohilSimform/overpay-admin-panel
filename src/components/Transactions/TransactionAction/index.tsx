import { Button, InputSearch } from '@/components/Ant'
import { ActionWrapper } from './TransactionAction.styled'
import { Filter, Search, Share } from '@/components/Icons'

export default function TransactionAction() {
  return (
    <ActionWrapper>
      <InputSearch prefix={<Search />} placeholder="Search for transactions..." />
      <div className="actions-btn-container">
        <Button type="default" icon={<Filter />}>
          Filters
        </Button>
        <Button type="default" icon={<Share />}>
          Exports
        </Button>
      </div>
    </ActionWrapper>
  )
}
