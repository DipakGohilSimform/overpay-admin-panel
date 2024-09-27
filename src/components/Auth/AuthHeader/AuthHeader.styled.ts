import styled from 'styled-components'
import { Header } from '@/components/Ant'

export const AuthNav = styled(Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--neutral-900);
  position: fixed;
  top: 0;
  left: 0;
  padding: 22px 48px;
  align-items: center;
  .signinBtn {
    max-width: 150px;
    width: 100%;
  }
  .navWrapper {
    ul {
      display: flex;
      gap: 40px;
      list-style-type: none;
      li {
        a {
          color: var(--neutral-0);
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: color 0.3s;
          &:hover {
            color: var(--primary-500);
          }
        }
      }
    }
  }
`
