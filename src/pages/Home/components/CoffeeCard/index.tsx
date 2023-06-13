import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { ChooseQuantityContainer } from '../../../../components/ChooseQuantityContainer'
import { formatMoney } from '../../../../utils/format_money'
import { ShoppingCart } from 'phosphor-react'
import {
  AddToCartContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeePrice,
  CoffeeCardTags,
  CoffeeDescription,
  CoffeeName,
} from './styles'
export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee.price)
  function handleIncreaseQuantity() {
    setQuantity((oldQuantity) => oldQuantity + 1)
  }
  function handleDecreaseQuantity() {
    setQuantity((oldQuantity) => oldQuantity - 1)
  }
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  return (
    <CoffeeCardContainer>
      <img
        src={`/${coffee.photo}`}
        alt="Coffee image is on the public folder"
      />
      <CoffeeCardTags>
        {coffee.tags.map((tag) => (
          <span className="sm" key={`${tag}${coffee.id}`}>
            {tag}
          </span>
        ))}
      </CoffeeCardTags>
      <CoffeeName className="baloo bold lg">{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeeCardFooter>
        <CoffeePrice>
          <small>R$</small>{' '}
          <span className="baloo bold xlg">{formattedPrice}</span>
        </CoffeePrice>
        <AddToCartContainer>
          <ChooseQuantityContainer
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddToCartContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
