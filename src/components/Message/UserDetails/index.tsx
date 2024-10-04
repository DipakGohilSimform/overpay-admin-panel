import React from 'react'
import { UserDetailsWrapper } from './UserDetailsWrapper.styled'
import UserProfile from './Profile'
import RecentFile from './RecentFile'
import Images from './Images'

export default function UserDetails() {
  return (
    <UserDetailsWrapper>
      <UserProfile />
      <RecentFile />
      <Images />
    </UserDetailsWrapper>
  )
}
