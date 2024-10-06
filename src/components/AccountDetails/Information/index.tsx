import { Avatar, Button, Form, FormItem, Input } from '@/components/Ant'
import { InformationWrapper } from './InformationWrapper'

export default function Information() {
  return (
    <InformationWrapper>
      <div className="information">
        <div className="title">Personal Informations</div>
        <div className="user-cta-wrapper">
          <Avatar src="/images/avatar2.png" size={100} />
          <div className="btn-wrapper">
            <Button type="primary">Upload new pictures</Button>
            <Button type="default">Delete</Button>
          </div>
        </div>
        <Form layout="vertical">
          <div className="form-wrapper">
            <FormItem label="Full legal first name" colon={false}>
              <Input value="Alesia" />
            </FormItem>
            <FormItem label="Full legal last name" colon={false}>
              <Input value="Karapova" />
            </FormItem>
            <FormItem label="Date of birth" colon={false}>
              <Input value="29th March 1996" />
            </FormItem>
            <FormItem label="Phone number" colon={false}>
              <Input value="+1 2345 2980 777" />
            </FormItem>
          </div>
        </Form>

        <h3 className="form-title">Personal Address</h3>
        <Form layout="vertical">
          <div className="form-wrapper">
            <FormItem label="Country" colon={false}>
              <Input value="United States" />
            </FormItem>
            <FormItem label="City" colon={false}>
              <Input value="California" />
            </FormItem>
            <FormItem label="Address" colon={false}>
              <Input value="6391 Elgin St. Celina, Delaware 10299" />
            </FormItem>
            <FormItem label="Postal code" colon={false}>
              <Input value="23467" />
            </FormItem>
          </div>
        </Form>
        <div className="edit-btn">
          <Button type="primary">Edit Details</Button>
        </div>
      </div>
    </InformationWrapper>
  )
}
