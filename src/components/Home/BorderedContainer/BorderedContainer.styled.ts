import { breakpointsDown } from '@/config/variables'
import styled from 'styled-components'

export const ParentWrapper = styled.div`
  padding: 24px;
  border: 1px solid var(--neutral-200);
  border-radius: 16px;
  &.stretch {
    min-width: 300px;
    flex: 1;
  }
  .heading-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;
    h6 {
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
    .switch-text {
      font-size: 12px;
      font-weight: 800;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-900);
    }
  }
  &.mb-32 {
    margin-bottom: 32px;
  }

  @media ${breakpointsDown.md} {
    width: 100%;
  }
  .visa-card {
    img {
      @media ${breakpointsDown.md} {
        object-fit: cover;
        width: 100%;
      }
    }
  }
  .wallet-controls {
    &.wallet-controls {
      @media ${breakpointsDown.md} {
        max-width: 100%;
      }
    }
  }
`
