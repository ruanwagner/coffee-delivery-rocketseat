import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'
export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <p className="baloo lg">Cafés selecionados</p>
      <DetailsContainer>
        {cartItems.map((coffee) => (
          <CoffeeCartCard key={coffee.id} coffee={coffee} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
