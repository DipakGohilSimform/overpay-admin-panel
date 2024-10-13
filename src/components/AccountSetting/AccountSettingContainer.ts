import { breakpointsDown } from '@/config/variables'
import styled from 'styled-components'

export const AccountSettingContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--neutral-300);
  max-height: calc(100vh - 150px);
  @media ${breakpointsDown.md} {
    flex-wrap: wrap;
    max-height: unset;
  }
`
