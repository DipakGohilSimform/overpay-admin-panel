import React from 'react'
import { MessageSidebar } from './Sidebar.styled'
import { Input } from '@/components/Ant'

import { Search } from '@/components/Icons'
import ChatBox from './ChatBox'

export default function Sidebar() {
  return (
    <MessageSidebar>
      <div className="sidebar-header">
        <Input prefix={<Search />} placeholder="Search..." />
      </div>
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </MessageSidebar>
  )
}
