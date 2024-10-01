import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--neutral-200);
  .message-sidebar {
    flex: 0 0 350px;
  }
  .message-content {
    flex: 1 1 auto;
    border: 1px solid var(--neutral-200);
    border-top: none;
  }
  .user-details {
    flex: 0 0 300px;
  }
`
