import { Link } from 'react-router-dom'
import { Button, Form, FormItem, Input } from '@/components/Ant'
import { AuthHeader } from '@/components/Auth/AuthHeader/AuthHeader'
import { FormContent } from '@/components/Auth/FormContent/FormContent'

export default function ForgotPassword() {
  return (
    <>
      <AuthHeader />
      <FormContent
        title="Need help with your account?"
        subtitle="Enter the email address associated with your account and we will send you a link to reset your password."
        formChildren={
          <>
            <Form>
              <FormItem rules={[{ type: 'email' }]}>
                <Input placeholder="Enter your Email" />
              </FormItem>
              <Button type="primary" block size="large">
                Send Link
              </Button>
            </Form>
            <Link to="/forgotpassword" className="forgotEmailLink">
              Forgot your Email?
            </Link>
          </>
        }
      />
    </>
  )
}
