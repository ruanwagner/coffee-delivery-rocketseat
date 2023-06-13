import { useCart } from '../../../../hooks/useCart'
import { Button } from '../../../../components/Button'
import { ConfirmationSectionContainer } from './styles'
import { formatMoney } from '../../../../utils/format_money'
const DELIVERY_PRICE = 3.5
export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal
  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <p>R$ {formattedItemsTotal}</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ {formattedDeliveryPrice}</p>
      </div>
      <div>
        <p className="lg bold">Total</p>
        <p className="lg bold">R$ {formattedCartTotal}</p>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
