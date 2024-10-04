import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  height: calc(100vh - 136px);
  border-top: 1px solid var(--neutral-200);
  border-bottom: 0;
  .message-sidebar {
    flex: 0 0 350px;
  }
  .message-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    border: 1px solid var(--neutral-200);
    border-top: none;
  }
  .user-details {
    flex: 0 0 300px;
    overflow: auto;
  }
`
