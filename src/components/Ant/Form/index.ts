import { Form as AntForm } from 'antd'
import styled from 'styled-components'

export const Form = styled(AntForm)`
  &.ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label,
  &.ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label,
  &.ant-form-vertical
    .ant-form-item:not(.ant-form-item-horizontal)
    .ant-col-xl-24.ant-form-item-label {
    padding: 0 0 4px;
  }
`
