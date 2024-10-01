import styled from 'styled-components'

export const ContentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid var(--neutral-200);
  .profile {
    display: flex;
    gap: 16px;
    align-items: center;
    .about {
      .name {
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--neutral-900);
      }
      .status {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.4px;
        color: var(--green);
      }
    }
  }
  .cta {
    display: flex;
    gap: 16px;
    .anticon {
      font-size: 20px;
    }
    .ant-btn.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: var(--neutral-50);
      border-color: var(--neutral-50);
    }
    .cta-btn {
      border-radius: 50%;
      color: var(--neutral-600);
    }
  }
`
