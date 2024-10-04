import styled from 'styled-components'

export const ChatBoxWrapper = styled.button`
  position: relative;
  padding: 20px 40px;
  width: 100%;
  border: none;
  background: var(--neutral-0);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: var(--neutral-50);
  }
  .profile {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .left {
      display: flex;
      gap: 12px;
      align-items: center;
      .name {
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--neutral-900);
      }
    }
    .date {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
  }
  .msg-view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .msg {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
    .msg-count {
      height: 24px;
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--white);
      background-color: var(--primary-500);
    }
  }
`
