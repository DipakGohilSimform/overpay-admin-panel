import { DatePicker, Divider, Form, FormItem, Input, Select, Switch } from '@/components/Ant'
import { Calendar, DownOutline } from '@/components/Icons'
import Currency from '@/components/Table/Currency'

const options = [
  {
    label: <Currency img="/images/united_states.png" value="US (United State Dollar)" />,
    value: 'US (United State Dollar)',
    emoji: '/images/united_states.png',
    desc: 'US (United State Dollar)'
  },
  {
    label: <Currency img="/images/united_kingdom.png" value="UK" />,
    value: 'uk',
    emoji: '/images/united_kingdom.png',
    desc: 'UK'
  },
  {
    label: <Currency img="/images/euro.png" value="Euro" />,
    value: 'euro',
    emoji: '/images/euro.png',
    desc: 'Euro'
  }
]

export default function InvoiceInput() {
  return (
    <Form layout="vertical">
      <FormItem label="Invoice number" colon={false}>
        <Input value="INV111XXX" className="invoice-input" />
      </FormItem>
      <FormItem label="Invoice date" colon={false}>
        <DatePicker suffixIcon={<Calendar />} className="invoice-input" />
      </FormItem>
      <FormItem label="Due date" colon={false}>
        <DatePicker suffixIcon={<Calendar />} className="invoice-input" />
      </FormItem>
      <FormItem label="Currency" colon={false}>
        <Select
          defaultValue={options[0].value}
          options={options}
          suffixIcon={<DownOutline />}
          className="currency-select"
          // eslint-disable-next-line react/no-unstable-nested-components
          optionRender={(option) => <Currency img={option.data.emoji} value={option.data.desc} />}
        />
      </FormItem>
      <Divider />
      <div className="other-actions-container">
        <div className="action-wrapper">
          <span>Payment method</span>
          <Switch />
        </div>
        <div className="action-wrapper">
          <span>Late fees</span>
          <Switch />
        </div>
        <div className="action-wrapper">
          <span>Notes</span>
          <Switch />
        </div>
      </div>
    </Form>
  )
}
