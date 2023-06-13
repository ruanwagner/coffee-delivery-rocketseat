import { coffees } from '../../data/coffees'
import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeesContainer, CoffeesListContainer } from './styles'
export function Home() {
  return (
    <>
      <Banner />
      <CoffeesContainer>
        <h2 className="baloo bolder">Nossos cafés</h2>
        <CoffeesListContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesListContainer>
      </CoffeesContainer>
    </>
  )
}
