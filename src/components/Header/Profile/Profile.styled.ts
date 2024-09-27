import styled from 'styled-components'
import { Dropdown } from '@/components/Ant'

export const ProfileWrapper = styled(Dropdown)`
  display: flex;
  align-items: center;
  background: var(--neutral-50);
  padding: 8px;
  border-radius: 72px;
  cursor: pointer;
  min-width: 163px;
  height: 48px;
  .user-name {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.2px;
    .name {
      color: var(--neutral-900);
    }
  }
  .anticon {
    color: var(--neutral-600);
  }
`
