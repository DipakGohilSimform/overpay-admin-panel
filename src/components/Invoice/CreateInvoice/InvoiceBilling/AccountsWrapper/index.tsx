import { Form, FormItem, Input, Select } from '@/components/Ant'
import AccountContent from './AccountContent'
import { AccountDetailContainer, DetailWrapper } from './AccountsWrapper.styled'
import { DownOutline, Mail, MapPin } from '@/components/Icons'

const options = [
  {
    label: (
      <AccountContent
        img="/images/icon2.png"
        accountId="OVN1290785"
        accountName="Biffco Enterprise"
      />
    ),
    value: 'Biffco Enterprise',
    accId: 'OVN1290785',
    accName: 'Biffco Enterprise',
    img: '/images/icon2.png'
  },
  {
    label: <AccountContent img="/images/icon2.png" accountId="OVN1290785" accountName="Biffco" />,
    value: 'Biffco',
    accId: 'OVN1290785',
    accName: 'Biffco',
    img: '/images/icon2.png'
  },
  {
    label: (
      <AccountContent img="/images/icon2.png" accountId="OVN1290785" accountName="Enterprise" />
    ),
    value: 'Enterprise',
    accId: 'OVN1290785',
    accName: 'Enterprise',
    img: '/images/icon2.png'
  }
]

export default function AccountsWrapper() {
  return (
    <AccountDetailContainer>
      <DetailWrapper>
        <h5>From:</h5>
        <div className="billto-bg">
          <AccountContent
            accountName="Overlay Design"
            accountId="OVN1290785"
            img="/images/icon1.png"
          />
        </div>
        <Form layout="vertical">
          <FormItem label="Email" colon={false}>
            <Input value="alesiakarapova@mail.com" prefix={<Mail />} className="account-input" />
          </FormItem>
          <FormItem label="Address" colon={false}>
            <Input
              value="6391 Elgin St. Celina, Delaware 10299"
              prefix={<MapPin />}
              className="account-input"
            />
          </FormItem>
        </Form>
      </DetailWrapper>
      <DetailWrapper>
        <h5>To:</h5>
        <div className="billto-bg">
          <Select
            defaultValue={options[0]}
            options={options}
            suffixIcon={<DownOutline />}
            variant="borderless"
            // eslint-disable-next-line react/no-unstable-nested-components
            optionRender={(option) => (
              <AccountContent
                img={option.data.img}
                accountId={option.data.accId}
                accountName={option.data.accName}
              />
            )}
          />
        </div>
        <Form layout="vertical">
          <FormItem label="Email" colon={false}>
            <Input placeholder="Email" prefix={<Mail />} className="account-input" />
          </FormItem>
          <FormItem label="Address" colon={false}>
            <Input placeholder="Address" prefix={<MapPin />} className="account-input" />
          </FormItem>
        </Form>
      </DetailWrapper>
    </AccountDetailContainer>
  )
}
