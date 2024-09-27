import { Link, useMatch } from 'react-router-dom'
import { Logo } from '@/components/Logo/Logo'
import { AuthNav } from './AuthHeader.styled'
import { Button } from '@/components/Ant'

export function AuthHeader() {
  const matchReason = useMatch('/auth/reason')

  return (
    <AuthNav>
      <Logo color="dark-light" />
      {!matchReason && (
        <div className="signinBtn">
          <Button type="primary" size="large" block href="/">
            Sign in
          </Button>
        </div>
      )}
      {matchReason && (
        <div className="navWrapper">
          <ul>
            <li>
              <Link to="/#">Personal</Link>
            </li>
            <li>
              <Link to="/#">Business</Link>
            </li>
            <li>
              <Link to="/#">Partners</Link>
            </li>
            <li>
              <Link to="/#">Help & FAQ</Link>
            </li>
          </ul>
        </div>
      )}
    </AuthNav>
  )
}
