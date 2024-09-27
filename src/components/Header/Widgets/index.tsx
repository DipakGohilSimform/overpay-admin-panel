import Notification from '../Notification'
import Profile from '../Profile'
import SearchButton from '../SearchButton'
import { WidgetsContainer } from './Widgets.styled'

export default function Widgets() {
  return (
    <WidgetsContainer>
      <SearchButton />
      <Notification />
      <Profile />
    </WidgetsContainer>
  )
}
