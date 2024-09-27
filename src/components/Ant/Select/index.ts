import { Select as AntSelect } from 'antd'
import styled from 'styled-components'

export const Select = styled(AntSelect)`
  &.ant-select-focused.ant-select-outlined:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer) {
    .ant-select-selector {
      border-color: var(--primary-500);
      box-shadow: none;
    }
  }
  &.ant-select-outlined:not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover {
    .ant-select-selector {
      border-color: var(--primary-500);
    }
  }
  .ant-select-selector {
    .ant-select-selection-item {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
    }
  }
  &.time-range-select {
    height: 50px;
    flex: 1 1 auto;
    .ant-select-selection-item {
      width: 68px;
      font-size: 17px;
      font-weight: 700;
      line-height: 25px;
      white-space: normal;
      text-overflow: unset;
    }
  }
  &.month-select {
    .ant-select-selection-item {
      width: 68px;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0.4px;
    }
  }
  .ant-select-arrow {
    font-size: 16px;
    color: var(--neutral-500);
  }
  &:hover {
    .ant-select-arrow:not(:last-child) {
      opacity: 1;
    }
  }
  &.ant-select-selector * {
    background-color: var(--neutral-50) !important;
  }
  &.ant-select-open * {
    background-color: var(--neutral-50) !important;
  }
`
