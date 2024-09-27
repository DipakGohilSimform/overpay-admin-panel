import styled from 'styled-components'
import { Tag } from 'antd'

interface IconBgWrapperProps {
  size?: 'default' | 'large' | 'small'
}

const sizeMap = {
  large: '56px',
  small: '40px',
  default: '48px'
}

export const IconBgWrapper = styled(Tag)<IconBgWrapperProps>`
  width: ${(props) => sizeMap[props.size || 'default']};
  height: ${(props) => sizeMap[props.size || 'default']};
  display: flex;
  align-items: center;
  justify-content: center;
`
