import styled from 'styled-components'

export const MenuWrapper = styled.button`
  background-color: transparent;
  border: none;
  .account-details-tab {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 26px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      width: 48px;
      border-radius: 50%;
      background-color: var(--neutral-100);
      color: var(--neutral-900);
      svg {
        font-size: 18px;
      }
    }
    .title {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
      margin-bottom: 4px;
      text-align: left;
    }
    .desc {
      max-width: 275px;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-600);
      text-align: left;
    }
  }
  &:hover {
    background-color: var(--neutral-50);
  }
`
