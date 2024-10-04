import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ant-avatar {
    margin-bottom: 24px;
  }
  .user-name {
    font-size: 18px;
    font-weight: 800;
    line-height: 24.3px;
    letter-spacing: 0.2px;
    color: var(--neutral-900);
  }
  .user-des {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--neutral-600);
  }
`
