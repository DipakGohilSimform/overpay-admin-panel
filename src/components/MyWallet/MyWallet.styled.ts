import { breakpointsDown } from '@/config/variables'
import { Flex } from 'antd'
import styled from 'styled-components'

export const WalletContainer = styled.div`
  display: flex;
  gap: 32px;
  .card-holder {
    flex: 0 0 357px;
  }
  .data-holder {
    flex: 1 1 auto;
  }
  @media ${breakpointsDown.lg} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`
export const ContryRow = styled(Flex)`
  padding: 12px 0;
  img {
    width: 32px;
    height: 32px;
  }
`
