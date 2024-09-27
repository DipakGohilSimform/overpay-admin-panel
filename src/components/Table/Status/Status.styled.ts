import styled from 'styled-components'
import { Tag } from '@/components/Ant'

export const StatusTag = styled(Tag)`
  width: 96px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.2px;
  text-align: center;
  background-color: ${({ color }) => {
    switch (color) {
      case 'success':
        return 'var(--green-bg)'
      case 'pending':
        return 'var(--orange-bg)'
      case 'failed':
        return 'var(--error-bg)'
      case 'refund':
        return 'var(--alert-bg)'
      case 'unpaid':
        return 'var(--portage-bg)'
      default:
        return 'var(--neutral-200)'
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case 'success':
        return 'var(--green)'
      case 'pending':
        return 'var(--orange)'
      case 'failed':
        return 'var(--error)'
      case 'refund':
        return 'var(--alert)'
      case 'unpaid':
        return 'var(--portage)'
      default:
        return 'var(--neutral-900)'
    }
  }};
  &.ant-tag-green {
    background: var(--green-bg);
    color: var(--green);
  }
  &.ant-tag-volcano {
    background: var(--orange-bg);
    color: var(--orange);
  }
  &.ant-tag-purple {
    background: var(--portage-bg);
    color: var(--portage);
  }
  &.ant-tag-red {
    background: var(--error-bg);
    color: var(--error);
  }
  &.ant-tag-gold {
    background: var(--alert-bg);
    color: var(--alert);
  }
`
