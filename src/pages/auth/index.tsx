import { Outlet, useMatch } from 'react-router-dom'
import { AuthStyles } from './auth.styles'
import { Carousel } from '@/components/Ant'
import { Bar, Cube } from '@/components/Icons'
import { CarouselContent } from '@/components/Auth/CarouselContent/CarouselContent'
import { Logo } from '@/components/Logo/Logo'

export default function AuthLayout() {
  const matchSignup = useMatch('/signup')
  const matchForgotPassword = useMatch('/forgotpassword')
  const matchOtp = useMatch('/otp')
  const matchReason = useMatch('/reason')
  const isSignup = !!matchSignup
  const hideBannerAndLogo = !!matchForgotPassword || !!matchOtp || !!matchReason
  const logoColor = isSignup ? 'light-light' : 'dark-dark'

  return (
    <AuthStyles isSignup={isSignup} hideBannerAndLogo={hideBannerAndLogo}>
      {!hideBannerAndLogo && (
        <>
          <div className="logoContainer">
            <Logo color={logoColor} />
          </div>
          <div className="authBanner">
            <div className="authVector bar">
              <Bar />
            </div>
            <Carousel draggable>
              <div>
                <CarouselContent src="/images/authImg.png" title="Get better with money " />
              </div>
              <div>
                <CarouselContent src="/images/authImg2.png" title="Speedy, Easy and Fast " />
              </div>
              <div>
                <CarouselContent src="/images/authImg.png" title="Get better with money " />
              </div>
            </Carousel>
            <div className="authVector cube">
              <Cube />
            </div>
          </div>
        </>
      )}
      <div className="content">
        <div className="form">
          <Outlet />
        </div>
        <div className="privacyWrapper">
          <span>Privacy Policy</span>
          <span>Copyright 2022</span>
        </div>
      </div>
    </AuthStyles>
  )
}
