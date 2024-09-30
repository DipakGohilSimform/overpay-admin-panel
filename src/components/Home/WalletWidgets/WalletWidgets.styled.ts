import styled from 'styled-components'

export const WidgetWrappper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  .iconContainer {
    width: 56px;
    height: 56px;
    border: 1px solid var(--neutral-200);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .anticon {
      font-size: 24px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--neutral-600);
  }
`
