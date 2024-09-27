import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: calc(100vh - 162px); */

  padding-top: 102px;
  @media ${breakpointsDown.xxl} {
    /* padding-top: 60px; */
    /* height: calc(100vh - 116px); */
  }
  .imgContainer {
    padding-bottom: 62px;
    @media ${breakpointsDown.xxl} {
      /* padding-bottom: 14px; */
      max-width: 425px;
      /* margin-bottom: 40px; */
    }
    img {
      object-fit: contain;
      max-width: 500px;
      max-height: 391px;
    }
  }
  .contentContainer {
    max-width: 500px;
    h2 {
      font-size: 40px;
      line-height: 44px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
      color: var(--white);
    }
    p {
      font-size: 14px;
      line-height: 21px;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.2px;
      color: var(--white);
    }
  }
`
