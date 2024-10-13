import { breakpointsDown } from '@/config/variables'
import styled from 'styled-components'

export const HelpContainer = styled.div`
  display: flex;
  @media ${breakpointsDown.lg} {
    flex-wrap: wrap;
  }
`
