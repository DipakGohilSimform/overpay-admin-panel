import { Flex } from 'antd'
import styled from 'styled-components'

export const ProfileCardWrap = styled(Flex)`
  padding: 0 7px;
  width: 77px;
  .profile-card-text {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: 0.2px;
    text-align: center;
    color: var(--neutral-900);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
`
