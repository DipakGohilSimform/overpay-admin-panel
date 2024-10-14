import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const AccountSettingContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--neutral-300);
  max-height: calc(100vh - 150px);
  margin-inline: -40px;
  @media ${breakpointsDown.md} {
    flex-wrap: wrap;
    max-height: unset;
  }
`
