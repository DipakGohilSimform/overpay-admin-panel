import styled from 'styled-components'
import { Button } from '@/components/Ant/Button'

export const SocialButtonWrapper = styled(Button)`
  border: 1px solid var(--neutral-300);
  border-radius: 12px;
  height: 56px;
  width: 100%;
  color: var(--neutral-900);
  letter-spacing: 0.2px;
  line-height: 38px;
  align-items: center;
  font-weight: 400;
  background: var(--neutral-0);
  .ant-btn-icon {
    line-height: 0;
    flex-shrink: 0;
    .anticon {
      font-size: 22px;
    }
  }
  &:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: var(--primary-500);
    color: var(--neutral-900);
    background: transparent;
  }
`
