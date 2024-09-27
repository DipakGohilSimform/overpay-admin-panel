import { Link } from 'react-router-dom'
import { Input, FormItem, Form, InputPassword, Button, Checkbox, Divider } from '@/components/Ant'
import { FormContent } from '@/components/Auth/FormContent/FormContent'
import { EyeOpen, EyeClose, Apple, Google } from '@/components/Icons'
import { SocialButton } from '@/components/Auth/FormContent/SocialButtons/SocialButton'

function PasswordIcon(visible: boolean) {
  return visible ? <EyeOpen /> : <EyeClose />
}

export default function Signin() {
  return (
    <FormContent
      title="Sign in to Overpay"
      subtitle="Send, spend and save smarter"
      formChildren={
        <>
          <div className="btnsContainer">
            <SocialButton text="Sign Up with Google" icon={<Google />} />
            <SocialButton text="Sign Up with Apple" icon={<Apple />} />
          </div>
          <Divider plain>Or with email</Divider>
          <Form>
            <FormItem rules={[{ type: 'email' }]}>
              <Input placeholder="Email" />
            </FormItem>
            <FormItem>
              <InputPassword placeholder="Password" iconRender={PasswordIcon} visibilityToggle />
            </FormItem>
            <div className="rememberWrapper">
              <Checkbox>Remember me</Checkbox>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <Button type="primary" block size="large" href="/admin/dashboard">
              Sign In
            </Button>
            <p className="linkText">
              Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form>
        </>
      }
    />
  )
}
