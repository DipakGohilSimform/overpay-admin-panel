import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const BalanceContainer = styled.div`
  border-radius: 16px;
  border: 1px solid var(--neutral-200);
  padding: 24px;
  margin-bottom: 32px;
  .balance-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
    }
    .anticon {
      font-size: 20px;
      color: var(--neutral-500);
      transform: rotate(270deg);
      cursor: pointer;
    }
  }
  .balance-value {
    font-size: 40px;
    font-weight: 800;
    line-height: 44px;
    margin-bottom: 16px;
    color: var(--balance-text);
    span {
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
    }
    @media ${breakpointsDown.lg} {
      font-size: 35px;
    }
  }
  .balance-dated {
    display: flex;
    gap: 8px;
    .increment-value {
      color: var(--green);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
      display: inline-flex;
      gap: 4px;
      .anticon {
        font-size: 20px;
      }
    }
    .date {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
    }
  }
`
