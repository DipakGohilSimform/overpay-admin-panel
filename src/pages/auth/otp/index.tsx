// import type { GetProps } from 'antd'
import { Button, InputOTP } from '@/components/Ant'
import { AuthHeader } from '@/components/Auth/AuthHeader/AuthHeader'
import { FormContent } from '@/components/Auth/FormContent/FormContent'

// type OTPProps = GetProps<typeof Input.OTP>

export default function Otp() {
  return (
    <>
      <AuthHeader />
      <FormContent
        title="Verify your email"
        subtitle="We have sent code to your email alesiaka******@mail.com"
        formChildren={
          <>
            <div className="otpInputWrapper">
              <InputOTP length={5} />
            </div>
            <Button type="primary" block size="large">
              Verify Account
            </Button>
            <p className="otpText">
              Resend code in <span>59:00</span>
            </p>
          </>
        }
      />
    </>
  )
}
