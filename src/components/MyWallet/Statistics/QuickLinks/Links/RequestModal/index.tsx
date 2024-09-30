import { Flex, ModalProps } from 'antd'
import { Modal } from '@/components/Ant/Modal'
import { ModalClose } from '@/components/Icons/ModalClose'
import { Button, Divider } from '@/components/Ant'
import { Edit } from '@/components/Icons/Edit'

function ReviewRequestModal(props: ModalProps) {
  const { onCancel } = props
  return (
    <Modal
      {...props}
      closeIcon={<ModalClose />}
      width={544}
      footer={
        <Button block type="primary" onClick={onCancel}>
          Send Request
        </Button>
      }
    >
      <Flex gap={32} vertical>
        <Flex
          gap={12}
          vertical
          align="center"
          style={{ maxWidth: '400px', margin: 'auto' }}
          justify="center"
        >
          <h3 className="modal-title">Review detail of your request</h3>
          <p className="modal-desc">You can request multiple payment from up to 20 people</p>
        </Flex>
        <Flex gap={24} vertical>
          <Flex gap={20} justify="space-between" align="center">
            <h6>Transfer details</h6>
            <Button icon={<Edit />}>Edit</Button>
          </Flex>
          <Flex gap={8} vertical>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">You send</span>
              <span className="transfer-text primary">$1,240.00</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Total fees</span>
              <span className="transfer-text secondary">-$20.00</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Amount we&apos;ll convert</span>
              <span className="transfer-text secondary-bold">$1,220.00</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Guarenteed rate (48 hours)</span>
              <span className="transfer-text secondary">0.89765</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Should arrive</span>
              <span className="transfer-text secondary">by Feb 23</span>
            </Flex>
          </Flex>
        </Flex>
        <Divider style={{ margin: 0 }} />
        <Flex gap={24} vertical>
          <Flex gap={20} justify="space-between" align="center">
            <h6>Recipient</h6>
            <Button icon={<Edit />}>Edit</Button>
          </Flex>
          <Flex gap={8} vertical>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Name</span>
              <span className="transfer-text secondary-bold">Cyndy Lillibridge</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Email</span>
              <span className="transfer-text secondary">cindylillibridge@mail.com</span>
            </Flex>
            <Flex gap={20} align="center" justify="space-between" style={{ height: '32px' }}>
              <span className="transfer-text">Account number</span>
              <span className="transfer-text secondary-bold">OV123467834656</span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default ReviewRequestModal
