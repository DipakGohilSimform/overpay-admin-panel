import { CollapseProps } from 'antd'
import { Collapse } from '@/components/Ant/collapse'
import { FileIcon } from '@/components/Icons/FileIcon'
import { More } from '@/components/Icons'

export default function RecentFile() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <div className="recent-file">
          <h4 className="title">Recent files</h4>
          <p className="total">120 files</p>
        </div>
      ),
      children: (
        <>
          <div className="file-info">
            <div className="file">
              <FileIcon />
              <p className="file-name">InvoiceXX.pdf</p>
            </div>
            <More />
          </div>
          <div className="file-info">
            <div className="file">
              <FileIcon />
              <p className="file-name">InvoiceXX.pdf</p>
            </div>
            <More />
          </div>
          <div className="file-info">
            <div className="file">
              <FileIcon />
              <p className="file-name">InvoiceXX.pdf</p>
            </div>
            <More />
          </div>
        </>
      )
    }
  ]

  return <Collapse items={items} expandIconPosition="end" defaultActiveKey={['1']} />
}
