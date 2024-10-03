import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  .msg-content {
    position: relative;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: var(--neutral-600);
    max-width: 300px;
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 16px 16px 16px 4px;
    background-color: var(--neutral-150);
    .ant-btn {
      position: absolute;
      top: 30px;
      right: -45px;
      padding: 0;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: var(--neutral-600);
    }
  }
  .info {
    display: flex;
    align-items: center;
    gap: 12px;
    .name {
      font-size: 12px;
      font-weight: 800;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-900);
    }
    .date {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-500);
    }
  }
  &.send {
    justify-content: flex-end;
    .msg-content {
      color: var(--white);
      border-radius: 16px 16px 4px 16px;
      background-color: var(--primary-500);
    }
    .ant-btn {
      color: var(--neutral-600);
      top: 30px;
      left: -45px;
    }
    .info {
      flex-direction: row-reverse;
    }
  }
`
