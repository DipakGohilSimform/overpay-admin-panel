import styled from 'styled-components'
import { Button } from '@/components/Ant'

export const SearchButtonWrapper = styled(Button)`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: var(--neutral-50);
  border: 0;
  font-size: 24px;
  font-weight: 700;
  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled) {
    background: var(--neutral-50);
    color: var(--neutral-900);
  }
`
