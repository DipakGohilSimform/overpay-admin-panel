import styled from 'styled-components'
import { Header } from '@/components/Ant'
import { breakpointsDown } from '@/config/variables'

export const DashboardHeaderStyles = styled(Header)<{ scrolled: boolean }>`
  position: sticky;
  height: 94px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  z-index: 999;
  @media ${breakpointsDown.md} {
    padding: 12px 24px;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 10px;
    .hamburger-close {
      height: 48px;
      width: 48px;
      border-radius: 50%;
      color: var(--neutral-900);
      background: var(--neutral-60);
      &:hover {
        color: var(--neutral-900);
      }
    }
  }
  h2 {
    font-size: 24px;
    font-weight: 800;
    color: var(--neutral-900);
    line-height: 32px;
    @media ${breakpointsDown.md} {
      display: none;
    }
  }

  ${({ scrolled }) =>
    scrolled &&
    `
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    `}
`
