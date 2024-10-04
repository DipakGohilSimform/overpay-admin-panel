import { CollapseProps } from 'antd'
import { Collapse } from '@/components/Ant/collapse'

export default function Images() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <div className="recent-file">
          <h4 className="title">Images</h4>
          <p className="total">80 images</p>
        </div>
      ),
      children: (
        <div className="images">
          <img src="/images/ring.png" alt="ring" />
          <img src="/images/ring.png" alt="ring" />
          <img src="/images/ring.png" alt="ring" />
          <img src="/images/ring.png" alt="ring" />
        </div>
      )
    }
  ]

  return <Collapse items={items} expandIconPosition="end" defaultActiveKey={['1']} />
}
