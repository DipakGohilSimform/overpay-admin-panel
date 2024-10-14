import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const HelpContentContainer = styled.div`
  height: calc(100vh - 110px);
  overflow: auto;
  padding: 24px 0 24px 40px;
  margin-bottom: -40px;
  .title {
    font-size: 24px;
    font-weight: 800;
    line-height: 31.2px;
    color: var(--neutral-900);
    margin-bottom: 8px;
  }
  .desc {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--neutral-600);
    margin-bottom: 48px;
  }
  @media ${breakpointsDown.lg} {
    flex: 1 1 auto;
    height: unset;
    border: none;
    padding: 0;
  }
`
