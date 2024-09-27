import { MenuProps } from 'antd'
import { Button } from '@/components/Ant'
import { Archive, Copy, File, Forward, More, Print } from '@/components/Icons'
import { ActionDropdown } from './Actions.styled'

const items: MenuProps['items'] = [
  {
    label: 'Copy',
    key: '1',
    icon: <Copy />
  },
  {
    label: 'Print',
    key: '2',
    icon: <Print />
  },
  {
    label: 'Download PDF',
    key: '3',
    icon: <File />
  },
  {
    label: 'Share Link',
    key: '4',
    icon: <Forward />
  },
  {
    label: 'Archive',
    key: '5',
    icon: <Archive />
  }
]

const menuProps = {
  items
}

export default function Actions() {
  return (
    <ActionDropdown
      menu={menuProps}
      overlayClassName="action-dropdown"
      trigger={['click']}
      getPopupContainer={(t) => (t.parentNode as HTMLElement) || document.body}
      placement="bottomRight"
    >
      <Button icon={<More />} type="default" />
    </ActionDropdown>
  )
}
