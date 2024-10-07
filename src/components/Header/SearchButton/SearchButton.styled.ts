import styled from 'styled-components'
import { Button } from '@/components/Ant'

export const SearchButtonWrapper = styled(Button)`
  &.ant-btn {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 0;
    font-size: 24px;
    font-weight: 700;
    background: var(--neutral-60);
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      background: var(--neutral-200);
    }
  }
`
