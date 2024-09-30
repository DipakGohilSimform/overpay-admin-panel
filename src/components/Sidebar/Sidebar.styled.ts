import styled from 'styled-components'
import { Menu, Sider } from '@/components/Ant'

export const DashboardSiderStyles = styled(Sider)`
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  padding: 24px;
  align-self: flex-start;
  &.ant-layout-sider {
    position: sticky;
  }
  .logoContainer {
    padding: 20px 57px 32px 13px;
    border-bottom: 1px solid var(--neutral-300);
    margin-bottom: 40px;
  }
`
export const SidebarMenuStyles = styled(Menu)`
  background-color: red;
  &.ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end: 0;
  }
  &.ant-menu-light > .ant-menu.ant-menu-root.ant-menu-inline {
    border-inline-end: 0;
    .ant-menu-item {
      padding-left: 16px !important;
      margin: 0;
      margin-bottom: 12px;
      height: 47px;
      border-radius: 12px;
      color: var(--neutral-600);
      &:active {
        /* background-color: var(--neutral-250); */
      }
      .anticon {
        font-size: 20px;
      }
      .ant-menu-title-content {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.2px;
        .message {
          position: relative;
          &::after {
            content: '5';
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background: var(--neutral-900);
            color: var(--neutral-0);
            border-radius: 30px;
            position: absolute;
            top: 0;
            right: -64px;
            font-size: 10px;
            font-weight: 500;
            line-height: 15px;
          }
        }
        a {
          transition: none;
        }
      }
    }

    .ant-menu-item-selected {
      padding: 13px !important;
      color: var(--white);
      .ant-menu-title-content {
        font-weight: 800;
      }
    }
    .ant-menu-item-only-child {
      padding-left: 48px !important;
      &.ant-menu-item-selected {
        background: transparent;
        color: var(--primary-500);
      }
      &:hover {
        background: transparent;
        color: var(--primary-500);
      }
    }
  }
  .ant-menu-item:not(.ant-menu-item-selected):active {
    background-color: transparent;
  }
  .ant-menu-submenu {
    color: var(--neutral-600);
    .ant-menu-submenu-title {
      height: 47px;
      margin: 0;
      margin-bottom: 12px;
      padding: 13px 16px !important;
      border-radius: 12px;
      .anticon {
        font-size: 20px;
      }
      &:hover {
        background-color: var(--neutral-250);
      }
    }
  }
  &.ant-menu-light > .ant-menu.ant-menu-inline .ant-menu-sub.ant-menu-inline {
    background-color: transparent;
  }
  &.ant-menu-light > .ant-menu .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: var(--white);
    background: var(--primary-500);
    font-weight: 800;
  }
`
