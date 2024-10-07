import styled from 'styled-components'

export const MessageSidebar = styled.div`
  height: calc(100vh - 150px);
  overflow-y: auto;
  .sidebar-header {
    position: sticky;
    top: 0;
    background-color: var(--neutral-10);
    z-index: 10;
    padding: 32px 40px;
  }
`
