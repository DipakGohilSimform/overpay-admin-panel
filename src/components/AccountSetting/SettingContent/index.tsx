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
                defaultValue="EUR"
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
                defaultValue="EUR"
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'Technology', label: 'Technology' },
                  { value: 'Technology1', label: 'Technology1' },
                  { value: 'Technology2', label: 'Technology2' }
                ]}
              />
            </FormItem>
            <FormItem label="Postal code" colon={false}>
              <Input value="23467" />
            </FormItem>
          </div>
        </Form>
        <h3 className="form-title">Business Address</h3>
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
    </SettingContentContainer>
  )
}
