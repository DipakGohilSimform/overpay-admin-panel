import React from 'react'

import { ChatBoxWrapper } from './ChatBox.styled'
import { Avatar } from '@/components/Ant'

export default function ChatBox() {
  return (
    <ChatBoxWrapper>
      <div className="profile">
        <div className="left">
          <Avatar src="/images/avatar2.png" size={48} />
          <span className="name">Bertolt Reiner</span>
        </div>
        <span className="date">01.00</span>
      </div>
      <div className="msg-view">
        <p className="msg">We almost done with brief!</p>
        <span className="msg-count">2</span>
      </div>
    </ChatBoxWrapper>
  )
}
