import { Flex, ModalProps } from 'antd'
import { Button, Input, Select } from '@/components/Ant'
import { Modal } from '@/components/Ant/Modal'
import { ModalClose } from '@/components/Icons/ModalClose'
import SelectIcon from '@/components/Icons/SelectIcon'
import { ModalArrowLeft } from '@/components/Icons/ModalArrowLeft'
import { ModalArrowRight } from '@/components/Icons/ModalArrowRight'
import ProfileCard from '@/components/MyWallet/ProfileCard'

function PaymentModal(props: ModalProps) {
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
          <h3 className="modal-title">Request payment form</h3>
          <p className="modal-desc">You can request multiple payment from up to 20 people</p>
        </Flex>
        <Flex gap={24} vertical>
          <Input type="text" placeholder="Name, @username, or email" />
          <Flex gap={20} justify="space-between" align="center">
            <h6>Recent Contact</h6>
            <Flex align="center" gap={8}>
              <ModalArrowLeft />
              <ModalArrowRight />
            </Flex>
          </Flex>
          <Flex gap={24} align="center">
            <ProfileCard img="/images/avatar1.png" text="Francene" />
            <ProfileCard img="/images/avatar1.png" text="Francene" />
            <ProfileCard img="/images/avatar2.png" text="Cyndy. L" />
            <ProfileCard img="/images/avatar3.png" text="Roselle" />
            <ProfileCard img="/images/avatar4.png" text="Tanner. S" />
          </Flex>
        </Flex>
        <Input
          placeholder="Enter an amount"
          addonAfter={
            <Select
              defaultValue="EUR"
              style={{ width: 112 }}
              variant="borderless"
              suffixIcon={<SelectIcon />}
              options={[
                { value: 'EUR', label: 'EUR' },
                { value: 'USD', label: 'USD' },
                { value: 'OBP', label: 'OBP' }
              ]}
            />
          }
        />
      </Flex>
    </Modal>
  )
}

export default PaymentModal
