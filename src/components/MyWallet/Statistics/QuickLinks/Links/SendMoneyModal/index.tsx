import { Flex, ModalProps } from 'antd'
import { Modal } from '@/components/Ant/Modal'
import { ModalClose } from '@/components/Icons/ModalClose'
import { Button } from '@/components/Ant'
import { Plus } from '@/components/Icons'
import { ModalArrowLeft } from '@/components/Icons/ModalArrowLeft'
import { ModalArrowRight } from '@/components/Icons/ModalArrowRight'
import ProfileCard from '@/components/MyWallet/ProfileCard'
import PaymentCard from '@/components/MyWallet/PaymentCard'
import AmountCard from '@/components/MyWallet/AmountCard'

function SendMoneyModal(props: ModalProps) {
  const { onCancel } = props

  return (
    <Modal
      {...props}
      closeIcon={<ModalClose />}
      width={544}
      footer={
        <Button block type="primary" onClick={onCancel}>
          Continue
        </Button>
      }
    >
      <Flex gap={40} vertical>
        <Flex gap={12} vertical align="center">
          <h3 className="modal-title">Send Money</h3>
          <p className="modal-desc">
            Please enter user information that you want to send money and enter an amount
          </p>
        </Flex>
        <Flex gap={24} vertical>
          <Flex gap={20} justify="space-between" align="center">
            <h6>Recent Contact</h6>
            <Flex align="center" gap={8}>
              <ModalArrowLeft />
              <ModalArrowRight />
            </Flex>
          </Flex>
          <Flex wrap gap={24} align="center">
            <ProfileCard icon={<Plus />} text="Add" />
            <ProfileCard img="/images/avatar1.png" text="Francene" />
            <ProfileCard img="/images/avatar2.png" text="Cyndy. L" />
            <ProfileCard img="/images/avatar3.png" text="Roselle" />
            <ProfileCard img="/images/avatar4.png" text="Tanner. S" />
          </Flex>
          <Flex gap={24} vertical>
            <Flex gap={20} justify="space-between" align="center">
              <h6>Choose Method</h6>
              <Button className="b-rounded" icon={<Plus />} iconPosition="end">
                Add
              </Button>
            </Flex>
            <Flex gap={32} wrap>
              <Flex gap={12} vertical flex={1}>
                <PaymentCard img="/images/visa.png" method="Visa" price="$24,098.00" />
                <PaymentCard img="/images/mastercard.png" method="Mastercard" price="$14,111.00" />
                <PaymentCard img="/images/payoneer.png" method="Payoneer" price="$34,245.00" />
              </Flex>
              <Flex gap={12} vertical flex={1}>
                <img src="/images/Card1.png" alt="VisaCard" />
                <AmountCard />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default SendMoneyModal
