import styled from 'styled-components'
import { Checkbox as AntCheckbox } from 'antd'

export const Checkbox = styled(AntCheckbox)`
  .ant-checkbox-checked .ant-checkbox-inner:after {
    top: 48%;
    inset-inline-start: 35%;
    display: table;
    width: 6px;
    height: 10px;
  }
`
