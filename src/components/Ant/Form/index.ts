import { Form as AntForm } from 'antd'
import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const Form = styled(AntForm)`
  &.ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label,
  &.ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label,
  &.ant-form-vertical
    .ant-form-item:not(.ant-form-item-horizontal)
    .ant-col-xl-24.ant-form-item-label {
    padding: 0 0 4px;
  }
  &.ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label {
    padding-bottom: 10px;
  }
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
    .ant-form-item {
      margin-bottom: 0;
    }
    .ant-select {
      height: 56px;
    }
    @media ${breakpointsDown.md} {
      grid-template-columns: 1fr;
    }
  }
`
