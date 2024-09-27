import styled from 'styled-components'
import { Dropdown } from '@/components/Ant'

export const ActionDropdown = styled(Dropdown)`
  &.ant-btn-icon-only {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: transparent;
    border: 1px solid var(--neutral-300);

    .anticon {
      font-size: 20px;
      color: var(--neutral-600);
    }
  }
  &.ant-dropdown-open {
    background-color: var(--neutral-400);
    .anticon {
      color: var(--neutral-0);
    }
  }
  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--neutral-400);
    border-color: transparent;
    .anticon {
      color: var(--neutral-0);
    }
  }
`
