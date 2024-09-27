import { Button, Divider } from '@/components/Ant'
import { TotalDetailsWrapper } from './TotalDetails.styled'

export default function TotalDetails() {
  return (
    <TotalDetailsWrapper>
      <Button type="text" className="add-Btn">
        Add Item
      </Button>

      <div className="total-container">
        <p>
          Subtotal <span>$8,856.00</span>
        </p>
        <p>
          Discount
          <span>
            <Button type="text" className="add-Btn">
              Add
            </Button>
          </span>
        </p>
        <p>
          Tax
          <span>
            <Button type="text" className="add-Btn">
              Add
            </Button>
          </span>
        </p>
        <Divider />
        <p>
          Total <span>$8,856.00</span>
        </p>
      </div>
    </TotalDetailsWrapper>
  )
}
