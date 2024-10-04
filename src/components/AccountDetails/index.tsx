import { AccountDetailsWrapper } from './AccountDetailsWrapper'
import AccountSidebar from './AccountSidebar'
import Information from './Information'

export default function AccountDetailsContent() {
  return (
    <AccountDetailsWrapper>
      <AccountSidebar />
      <Information />
    </AccountDetailsWrapper>
  )
}
