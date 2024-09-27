import { AuthHeader } from '@/components/Auth/AuthHeader/AuthHeader'
import { FormHeading } from '@/components/Auth/FormContent/FormHeading/FormHeading'
import ReasonContent from '@/components/Auth/ReasonContent'
import { Driving, MoneySend, StatusUp, Wallet } from '@/components/Icons'
import { Container } from './reason.styled'

export default function Reason() {
  return (
    <Container>
      <AuthHeader />
      <FormHeading
        title="Tell us your main reason for using Overpay?"
        subtitle="Tell us about the current situation and we will make the right recommendations for you"
      />
      <div className="reasonsWrapper">
        <ReasonContent text="Spend or save daily" icon={<Wallet />} className="walletIcon" />
        <ReasonContent
          text="Spend while
travelling"
          icon={<Driving />}
          className="drivingIcon"
        />
        <ReasonContent
          text="Send money
worldwide"
          icon={<MoneySend />}
          className="moneysendIcon"
        />
        <ReasonContent
          text="Gain exposure to
financial assets"
          icon={<StatusUp />}
          className="statusUpIcon"
        />
      </div>
    </Container>
  )
}
