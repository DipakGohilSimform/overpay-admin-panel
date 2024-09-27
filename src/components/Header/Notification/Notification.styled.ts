import styled from 'styled-components'
import { Dropdown } from '@/components/Ant'

export const NotificationWrapper = styled(Dropdown)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: none;
  outline: none;
  .ant-badge {
    cursor: pointer;
    .ant-badge-dot {
      width: 10px;
      height: 10px;
    }
    .ant-avatar {
      background: var(--neutral-50);
      height: 48px;
      width: 48px;
      .anticon {
        font-size: 28px;
        color: var(--neutral-900);
      }
    }
  }
`
