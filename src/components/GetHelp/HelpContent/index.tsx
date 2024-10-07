import { HelpContentContainer } from './HelpContentContainer'
import HelpItem from './HelpItem'

export default function HelpContent() {
  return (
    <HelpContentContainer>
      <h2 className="title">Holding Money</h2>
      <p className="desc">Holding balances, setting up cards debits, and using assets</p>
      <div className="hep-item-wrapper">
        <HelpItem
          title="Why can't I open balance?"
          desc="We'd like to offer balances to everyone. But there are a few countries and US states where you can't open any balances just yet."
          tag="Money basic, Balance"
          likeCount="20"
        />
        <HelpItem
          title="How do I set up Direct Debits?"
          desc="When you set up a Direct Debit, you give a company permission to take regular payments from your account. You might use Direct Debits to pay for a monthly subscription like the gym, or to pay your phone or energy bill."
          tag="Debit, Managing"
          likeCount="10"
        />
        <HelpItem
          title="How do I open a balance?"
          desc="Add money to your balances whenever you like. Just choose which currency you'd like to add to, then click Add money. When you add money to your balances, make sure it comes from your own bank account. If you want to add money to your business account, make sure the money comes from your company's bank account."
          tag="Money basic, Balance"
          likeCount="25"
        />
        <HelpItem
          title="How do I cancel a Direct Debit?"
          desc="Cancelling a Direct Debit won't cancel the contract or subscription you have with the company you were paying. So don't forget to cancel with them, or give them different account details."
          tag="Debit, Managing"
          likeCount="10"
        />
        <HelpItem
          title="Why can't I open balance?"
          desc="We'd like to offer balances to everyone. But there are a few countries and US states where you can't open any balances just yet."
          tag="Money basic, Balance"
          likeCount="20"
        />
        <HelpItem
          title="How do I set up Direct Debits?"
          desc="When you set up a Direct Debit, you give a company permission to take regular payments from your account. You might use Direct Debits to pay for a monthly subscription like the gym, or to pay your phone or energy bill."
          tag="Debit, Managing"
          likeCount="10"
        />
        <HelpItem
          title="How do I open a balance?"
          desc="Add money to your balances whenever you like. Just choose which currency you'd like to add to, then click Add money. When you add money to your balances, make sure it comes from your own bank account. If you want to add money to your business account, make sure the money comes from your company's bank account."
          tag="Money basic, Balance"
          likeCount="25"
        />
      </div>
    </HelpContentContainer>
  )
}
