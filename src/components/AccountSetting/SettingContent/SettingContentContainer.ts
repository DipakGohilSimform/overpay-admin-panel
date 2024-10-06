import styled from 'styled-components'

export const SettingContentContainer = styled.div`
  flex: 1 1 auto;
  padding: 40px 0 40px 40px;
  .setting-content {
    .setting-title {
      font-size: 24px;
      font-weight: 800;
      line-height: 31.2px;
      color: var(--neutral-900);
      margin-bottom: 32px;
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
