import { breakpointsDown } from '@/config/variables'
import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  border-top: 1px solid var(--neutral-200);
  border-bottom: 0;
  .message-sidebar {
    flex: 0 1 350px;
    @media ${breakpointsDown.md} {
      flex: 1 1 auto;
      margin-inline: -40px;
    }
  }
  .message-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    border: 1px solid var(--neutral-200);
    border-top: none;
    @media ${breakpointsDown.md} {
      display: none;
    }
  }
  .user-details {
    flex: 0 0 300px;
    overflow-y: auto;
    @media ${breakpointsDown.lg} {
      display: none;
    }
  }
`
