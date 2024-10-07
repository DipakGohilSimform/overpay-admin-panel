import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

interface AuthStylesProps {
  isSignup: boolean
  hideBannerAndLogo: boolean
}

export const AuthStyles = styled.main<AuthStylesProps>`
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 24px;
  position: relative;
  background-color: var(--neutral-10);
  ${(props) =>
    props.isSignup
      ? `
      .authBanner {
        order: 1;
      }
      .content {
        order: 2;
      }
    `
      : `
      .authBanner {
        order: 2;
      }
      .content {
        order: 1;
      }
    `}
  ${(props) =>
    props.hideBannerAndLogo &&
    `
      .logoContainer {
        display: none;
      }
      .authBanner {
        display: none;
      }
    `}
  .logoContainer {
    position: absolute;
    top: 56px;
    left: 56px;
    z-index: 2;
  }
  .authBanner {
    width: 100%;
    background: var(--primary-500);
    position: relative;
    max-width: 640px;
    @media ${breakpointsDown.xl} {
      display: none;
    }
    .ant-carousel {
      height: 100%;
    }
    .authVector {
      position: absolute;
    }
    .cube {
      left: 13px;
      bottom: 13px;
    }
    .bar {
      top: 17px;
      right: 14px;
    }
  }
  .content {
    padding: 24px;
    width: 100%;
    position: relative;
    @media ${breakpointsDown.md} {
      padding: 20px;
    }
    .logo {
      max-width: 200px;
      margin-bottom: 32px;
    }
    .form {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      height: 100%;
    }
    .privacyWrapper {
      display: flex;
      justify-content: space-between;
      padding: 0 48px 24px 24px;
      position: absolute;
      bottom: 0px;
      width: 100%;
      span {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: var(--neutral-600);
      }
    }
  }
`
