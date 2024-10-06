import { HelpContainer } from './AccountSettingContainer'
import HelpContent from './HelpContent'
import HelpSidebar from './HelpSidebar'

export default function GetHelpContent() {
  return (
    <HelpContainer>
      <HelpSidebar />
      <HelpContent />
    </HelpContainer>
  )
}
