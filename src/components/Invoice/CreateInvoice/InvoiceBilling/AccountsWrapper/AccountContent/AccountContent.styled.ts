import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  .name-container {
    h6 {
      font-size: 16px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-600);
    }
  }
`
