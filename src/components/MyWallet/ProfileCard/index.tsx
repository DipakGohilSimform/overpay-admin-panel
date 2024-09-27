/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react'
import { ProfileCardWrap } from './ProfileCard.styled'
import { Avatar } from '@/components/Ant'
import { Plus } from '@/components/Icons'

interface ProfileCardType {
  img?: string
  text: string
  icon?: ReactNode
}
export default function ProfileCard({ img, icon, text }: ProfileCardType) {
  if (img)
    return (
      <ProfileCardWrap gap={12} vertical align="center">
        <Avatar
          size={56}
          src={img}
          style={{ backgroundColor: 'var(--neutral-100)', color: 'var(--black)' }}
        />
        <span className="profile-card-text">{text}</span>
      </ProfileCardWrap>
    )
  if (icon)
    return (
      <ProfileCardWrap gap={12} vertical align="center">
        <Avatar
          size={56}
          icon={icon}
          style={{ backgroundColor: 'var(--neutral-100)', color: 'var(--black)' }}
        />
        <span className="profile-card-text">{text}</span>
      </ProfileCardWrap>
    )
  return (
    <ProfileCardWrap gap={12} vertical align="center">
      <Avatar
        size={56}
        icon={<Plus />}
        style={{ backgroundColor: 'var(--neutral-100)', color: 'var(--black)' }}
      />
      <span className="profile-card-text">{text}</span>
    </ProfileCardWrap>
  )
}
