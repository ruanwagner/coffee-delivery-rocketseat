import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityContainer } from './styles'
interface ChooseQuantityContainerProps {
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
}
export function ChooseQuantityContainer({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: ChooseQuantityContainerProps) {
  return (
    <QuantityContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecreaseQuantity}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="text" readOnly value={quantity} />
      <IconWrapper onClick={onIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityContainer>
  )
}
