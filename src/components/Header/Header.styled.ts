import styled from 'styled-components'
import { Header } from '@/components/Ant'

export const DashboardHeaderStyles = styled(Header)<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  background-color: var(--neutral-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  z-index: 999;
  h2 {
    font-size: 24px;
    font-weight: 800;
    color: var(--neutral-900);
    line-height: 32px;
  }

  ${({ scrolled }) =>
    scrolled &&
    `
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    `}
`
