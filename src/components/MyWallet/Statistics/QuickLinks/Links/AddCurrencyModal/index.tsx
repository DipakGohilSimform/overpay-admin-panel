import { Flex, ModalProps } from 'antd'
import { Modal } from '@/components/Ant/Modal'
import { ModalClose } from '@/components/Icons/ModalClose'
import { Button, Input } from '@/components/Ant'
import ModalContryRow from '@/components/MyWallet/ModalContryRow'
import { Search } from '@/components/Icons'

function AddCurrencyModal(props: ModalProps) {
  const { onCancel } = props
  return (
    <Modal
      {...props}
      closeIcon={<ModalClose />}
      footer={
        <Button block type="primary" onClick={onCancel}>
          Add a Currency
        </Button>
      }
    >
      <Flex gap={24} vertical>
        <Flex gap={12} vertical align="center">
          <h3 className="modal-title">Add Currency</h3>
          <p className="modal-desc">
            When you add a currency, any payments you receive in that currency will be credited to
            that balance
          </p>
        </Flex>
        <Input type="text" placeholder="Search..." prefix={<Search />} />
        <Flex vertical gap={4}>
          <ModalContryRow img="/images/australia.png" val="Australian Dollar" />
          <ModalContryRow img="/images/japan.png" val="Japanese Yen" />
          <ModalContryRow img="/images/singapore.png" val="Singapore Dollar" />
          <ModalContryRow img="/images/switzerland.png" val="British Pound" />
          <ModalContryRow img="/images/united kingdom.png" val="Swish Franc" />
        </Flex>
      </Flex>
    </Modal>
  )
}

export default AddCurrencyModal
