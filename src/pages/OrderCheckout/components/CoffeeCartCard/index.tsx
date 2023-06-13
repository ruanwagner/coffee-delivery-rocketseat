import { Trash } from 'phosphor-react'
import { useCart } from '../../../../hooks/useCart'
import { ChooseQuantityContainer } from '../../../../components/ChooseQuantityContainer'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/format_money'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)
  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }
  function handleRemove() {
    removeCartItem(coffee.id)
  }
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/${coffee.photo}`} alt="" />
        <div>
          <p className="">{coffee.name}</p>
          <ActionsContainer>
            <ChooseQuantityContainer
              onIncreaseQuantity={handleIncrease}
              onDecreaseQuantity={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
