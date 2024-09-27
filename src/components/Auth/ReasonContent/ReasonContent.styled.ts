import styled from 'styled-components'

export const ReasonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 35px;
  border: 1px solid var(--neutral-300);
  border-radius: 12px;
  transition: all 0.3s;
  &:hover {
    background: var(--primary-500);
    label {
      color: var(--neutral-0);
    }
    .ant-tag {
      background: var(--neutral-0);
      .anticon {
        color: var(--primary-500);
      }
    }
  }
  label {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: var(--neutral-900);
    max-width: 132px;
    text-align: center;
  }
  .ant-tag {
    .anticon {
      font-size: 28px;
    }
  }
`
