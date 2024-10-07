import styled from 'styled-components'

export const InformationWrapper = styled.div`
  flex: 1 1 auto;
  .information {
    padding: 40px;
    .title {
      font-size: 24px;
      font-weight: 800;
      line-height: 31.2px;
      color: var(--neutral-900);
      margin-bottom: 48px;
    }
    .user-cta-wrapper {
      display: flex;
      align-items: center;
      gap: 48px;
      margin-bottom: 48px;
      .ant-avatar {
        display: inline-block;
        border: 1px solid var(--primary-500);
        padding: 3px;
      }
      .btn-wrapper {
        display: flex;
        gap: 12px;
      }
    }
    .form-title {
      font-size: 20px;
      font-weight: 800;
      line-height: 27px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
      margin-bottom: 24px;
    }
    .edit-btn {
      display: flex;
      justify-content: flex-end;
    }
  }
`
