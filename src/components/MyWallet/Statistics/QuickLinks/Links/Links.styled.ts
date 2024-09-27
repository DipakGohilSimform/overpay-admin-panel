import styled from 'styled-components'

export const LinkContainer = styled.button`
  border: 1px solid var(--neutral-200);
  border-radius: 12px;
  padding: 13px 35px;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  background-color: transparent;
  cursor: pointer;
  .anticon {
    font-size: 20px;
  }
  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.4px;
    color: var(--balance-text);
  }
  .ant-tag-blue {
    color: var(--primary-500);
    background: var(--neutral-100);
  }
`
