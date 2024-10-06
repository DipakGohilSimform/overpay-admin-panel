import styled from 'styled-components'

export const HelpItemContainer = styled.div`
  padding: 24px;
  border: 1px solid var(--neutral-200);
  border-radius: 16px;
  margin-bottom: 24px;
  .title-wrapper {
    margin-bottom: 32px;
    .title {
      font-size: 18px;
      font-weight: 800;
      line-height: 24.3px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
      margin-bottom: 12px;
    }
    .desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--neutral-600);
    img {
      height: 21px;
    }
    span {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
    }
    .info {
      display: flex;
      gap: 16px;
      .wrapper {
        display: flex;
        gap: 8px;
      }
    }
  }
`
