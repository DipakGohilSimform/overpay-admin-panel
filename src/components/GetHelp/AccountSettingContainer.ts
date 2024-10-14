import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const HelpContainer = styled.div`
  display: flex;
  @media ${breakpointsDown.lg} {
    flex-wrap: wrap;
  }
`
