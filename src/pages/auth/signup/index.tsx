import { Link } from 'react-router-dom'
import { Button, Divider, Form, FormItem, Input, InputPassword } from '@/components/Ant'
import { FormContent } from '@/components/Auth/FormContent/FormContent'
import { Apple, EyeClose, EyeOpen, Google } from '@/components/Icons'
import { SocialButton } from '@/components/Auth/FormContent/SocialButtons/SocialButton'

function PasswordIcon(visible: boolean) {
  return visible ? <EyeOpen /> : <EyeClose />
}

export default function Signup() {
  return (
    <FormContent
      title="Sign up for an account"
      subtitle="Send, spend and save smarter"
      formChildren={
        <>
          <div className="btnsContainer">
            <SocialButton text="Sign Up with Google" icon={<Google />} />
            <SocialButton text="Sign Up with Apple" icon={<Apple />} />
          </div>
          <Divider plain>Or with email</Divider>
          <Form>
            <div className="nameContainer">
              <FormItem>
                <Input placeholder="First name" />
              </FormItem>
              <FormItem>
                <Input placeholder="Last name" />
              </FormItem>
            </div>
            <FormItem rules={[{ type: 'email' }]}>
              <Input placeholder="Email" />
            </FormItem>
            <FormItem>
              <InputPassword placeholder="Password" iconRender={PasswordIcon} visibilityToggle />
            </FormItem>
            <p className="infoText">
              By creating an account, you agreeing to our <span>Privacy Policy</span>,and{' '}
              <span>Electronics Communication Policy.</span>
            </p>
            <Button type="primary" block size="large">
              Sign Up
            </Button>
            <p className="linkText">
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </Form>
        </>
      }
    />
  )
}
