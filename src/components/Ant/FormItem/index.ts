import { Form } from 'antd'
import styled from 'styled-components'

export const FormItem = styled(Form.Item)`
  &.ant-form-item {
    margin-bottom: 16px;
    .ant-form-item-label {
      & > label {
        font-weight: 800;
        line-height: 18px;
        letter-spacing: 0.4px;
      }
    }
  }
`
