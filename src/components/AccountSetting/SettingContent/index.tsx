import { Button, Form, FormItem, Input, Select } from '@/components/Ant'
import { SettingContentContainer } from './SettingContentContainer'
import SelectIcon from '@/components/Icons/SelectIcon'

export default function SettingContent() {
  return (
    <SettingContentContainer>
      <div className="setting-content">
        <h2 className="setting-title">Business Information</h2>
        <h3 className="form-title">Business Details</h3>
        <Form layout="vertical">
          <div className="form-wrapper">
            <FormItem label="Business Name" colon={false}>
              <Input value="Iconic Agency" />
            </FormItem>
            <FormItem label="Industry" colon={false}>
              <Select
                defaultValue="Technology"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'Technology', label: 'Technology' },
                  { value: 'Technology1', label: 'Technology1' },
                  { value: 'Technology2', label: 'Technology2' }
                ]}
              />
            </FormItem>
            <FormItem label="Timezone" colon={false}>
              <Select
                defaultValue="PT, Pacific Time, UTC -8:00"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'PT, Pacific Time, UTC -8:00', label: 'PT, Pacific Time, UTC -8:00' },
                  { value: 'PT, Pacific Time, UTC -10:00', label: 'PT, Pacific Time, UTC -10:00' },
                  { value: 'PT, Pacific Time, UTC -12:00', label: 'PT, Pacific Time, UTC -12:00' }
                ]}
              />
            </FormItem>
            <FormItem label="Default Currency" colon={false}>
              <Select
                defaultValue="USD"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'INR', label: 'INR' },
                  { value: 'CHF ', label: 'CHF ' }
                ]}
              />
            </FormItem>
          </div>
        </Form>
        <h3 className="form-title">Business Address</h3>
        <Form layout="vertical">
          <FormItem label="Legal name of company" colon={false}>
            <Input value="Iconic Nice Agency LTD" />
          </FormItem>
          <div className="form-wrapper">
            <FormItem label="Apartment, suite, or etc." colon={false}>
              <Input value="Greenlake" />
            </FormItem>
            <FormItem label="Address" colon={false}>
              <Input value="4517 Washington Ave. Manchester" />
            </FormItem>
            <FormItem label="City" colon={false}>
              <Select
                defaultValue="Washington"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'Washington', label: 'Washington' },
                  { value: 'Bellingham', label: 'Bellingham' },
                  { value: 'Vancouver ', label: 'Vancouver ' }
                ]}
              />
            </FormItem>
            <FormItem label="Country or Region" colon={false}>
              <Select
                defaultValue="United State"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'United State', label: 'United State' },
                  { value: 'India', label: 'India' },
                  { value: 'Canada ', label: 'Canada ' }
                ]}
              />
            </FormItem>
          </div>
        </Form>
        <div className="edit-btn">
          <Button type="primary">Edit Details</Button>
        </div>
      </div>
    </SettingContentContainer>
  )
}
