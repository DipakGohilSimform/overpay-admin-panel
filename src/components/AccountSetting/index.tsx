import { AccountSettingContainer } from './AccountSettingContainer'
import SettingContent from './SettingContent'
import SettingSidebar from './SettingSidebar'

export default function AccountSettingContent() {
  return (
    <AccountSettingContainer>
      <SettingSidebar />
      <SettingContent />
    </AccountSettingContainer>
  )
}
