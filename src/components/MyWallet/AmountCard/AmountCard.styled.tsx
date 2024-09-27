import { Flex } from 'antd'
import styled from 'styled-components'

export const AmountCardBordered = styled(Flex)`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--neutral-200);
  span {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: var(--neutral-600);
  }
`
