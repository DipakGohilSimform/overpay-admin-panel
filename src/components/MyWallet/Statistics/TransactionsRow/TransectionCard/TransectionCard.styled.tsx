import { Flex } from 'antd'
import styled from 'styled-components'

export const CardStyled = styled(Flex)`
  width: 120px;
  padding: 14px 0;
  flex: 1 1 auto;
`
export const CardTitle = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: var(--neutral-600);
`
export const CardPriceText = styled.span`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: var(--neutral-900);
`
