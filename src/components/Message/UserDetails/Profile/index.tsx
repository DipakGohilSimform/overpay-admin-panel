import { Avatar } from '@/components/Ant'
import { ProfileContainer } from './ProfileContainer'

export default function UserProfile() {
  return (
    <ProfileContainer>
      <div className="profile">
        <Avatar src="/images/avatar2.png" size={100} />
        <h4 className="user-name">Stefanie Ang</h4>
        <p className="user-des">Alesana, XP</p>
      </div>
    </ProfileContainer>
  )
}
