import { useState } from 'react'
import { CardReceive, CardSend, Deposit, Receipt, ShopAdd } from '@/components/Icons'
import Links from '../Links'
import { LinkWrapper } from './LinkHolder.styled'
import AddCurrencyModal from '../Links/AddCurrencyModal'
import SendMoneyModal from '../Links/SendMoneyModal'
import TransfarModal from '../Links/TransferModal'
import PaymentModal from '../Links/PaymentModal'
import ReviewRequestModal from '../Links/RequestModal'

export default function LinksHolder() {
  const [currencyModalOpen, setcurrencyModalOpen] = useState(false)
  const [SmModalOpen, setSmModalOpen] = useState(false)
  const [transferModalOpen, setTransferModalOpen] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  return (
    <>
      <LinkWrapper>
        <Links onClick={() => setcurrencyModalOpen(true)} icon={<Deposit />} text="Deposit" />
        <Links onClick={() => setSmModalOpen(true)} icon={<CardSend />} text="Send" />
        <Links onClick={() => setTransferModalOpen(true)} icon={<CardReceive />} text="Recieve" />
        <Links onClick={() => setPaymentModalOpen(true)} icon={<Receipt />} text="Invoicing" />
        <Links onClick={() => setRequestModalOpen(true)} icon={<ShopAdd />} text="Checkout" />
      </LinkWrapper>
      <AddCurrencyModal
        centered
        open={currencyModalOpen}
        onOk={() => setcurrencyModalOpen(false)}
        onCancel={() => setcurrencyModalOpen(false)}
      />
      <SendMoneyModal
        centered
        open={SmModalOpen}
        onOk={() => setSmModalOpen(false)}
        onCancel={() => setSmModalOpen(false)}
      />
      <TransfarModal
        centered
        open={transferModalOpen}
        onOk={() => setTransferModalOpen(false)}
        onCancel={() => setTransferModalOpen(false)}
      />
      <PaymentModal
        centered
        open={paymentModalOpen}
        onOk={() => setPaymentModalOpen(false)}
        onCancel={() => setPaymentModalOpen(false)}
      />
      <ReviewRequestModal
        centered
        open={requestModalOpen}
        onOk={() => setRequestModalOpen(false)}
        onCancel={() => setRequestModalOpen(false)}
      />
    </>
  )
}
