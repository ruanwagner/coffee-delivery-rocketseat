import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderButton, HeaderLink } from './styles'
import { defaultTheme } from '../../styles/themes/default'
export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <HeaderButton>
          <MapPin size={26} weight="fill" color={defaultTheme.purple} />
          Porto Alegre, RS
        </HeaderButton>
        <NavLink to="/cart">
          <HeaderLink>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={26} weight="fill" />
          </HeaderLink>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
