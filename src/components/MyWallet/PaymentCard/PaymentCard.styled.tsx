import { Flex } from 'antd'
import styled from 'styled-components'

export const PaymentCardBordered = styled(Flex)`
  border: 1px solid var(--neutral-200);
  border-radius: 12px;
  padding: 12px 16px;
  &.active {
    border: 1px solid var(--primary-500);
  }
  .menthod-text {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.4px;
    font-weight: 800;
    color: var(--neutral-900);
  }
  .price-text {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.4px;
    font-weight: 500;
    color: var(--neutral-600);
  }
`
