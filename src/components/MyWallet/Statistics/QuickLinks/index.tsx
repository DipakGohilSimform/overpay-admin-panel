import BorderedContainer from '@/components/Home/BorderedContainer'
import { DownOutline } from '@/components/Icons'
import LinksHolder from './LinksHolder'

export default function QuickLinks() {
  return (
    <BorderedContainer title="Quick Links" headingChildren={<DownOutline />}>
      <LinksHolder />
    </BorderedContainer>
  )
}
