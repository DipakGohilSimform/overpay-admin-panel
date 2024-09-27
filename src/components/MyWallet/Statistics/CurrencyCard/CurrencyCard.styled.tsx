import { Flex } from 'antd'
import styled from 'styled-components'

export const CurrencyCardStyled = styled(Flex)`
  padding: 12px 0;
`
export const Flag = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const CountryName = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  color: var(--neutral-900);
  letter-spacing: 0.2px;
  span {
    padding-left: 5px;
    text-transform: uppercase;
    color: var(--neutral-200);
  }
`
