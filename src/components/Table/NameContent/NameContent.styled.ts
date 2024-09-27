import styled from 'styled-components'

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .name-wrapper {
    display: flex;
    gap: 4px;
    flex-direction: column;
    p {
      font-size: 16px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
    }
  }
`
