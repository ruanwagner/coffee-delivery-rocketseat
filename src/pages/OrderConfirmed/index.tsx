import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import confirmedOrderIllustration from '../../assets/illustration.svg'
import { OrderData } from '../OrderCheckout'
import { CircledIconItem } from '../../components/CircledIconItem'
import { defaultTheme } from '../../styles/themes/default'
import {
  InfoBenefit,
  OrderConfirmedContainer,
  OrderDetailsContainer,
} from './styles'
import { paymentMethods } from '../OrderCheckout/components/OrderCheckoutForm/PaymentMethodOptions'
interface LocationType {
  state: OrderData
}
export function OrderConfirmed() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])
  if (!state) return <></>
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h1 className="baloo bolder">Uhu! Pedido confirmado</h1>
        <p className="lg">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme.purple}>
              <MapPin size={18} weight="fill" color={defaultTheme.white} />
            </CircledIconItem>
            <span>
              {' '}
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>
              <br />
              {state.district} - {state.city}, {state.uf}
            </span>
          </InfoBenefit>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme.yellow}>
              <Clock size={18} weight="fill" color={defaultTheme.white} />
            </CircledIconItem>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </InfoBenefit>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme['yellow-dark']}>
              <CurrencyDollar
                size={18}
                weight="fill"
                color={defaultTheme.white}
              />
            </CircledIconItem>
            <span>
              Pagamento na entrega
              <br />
              <strong>{paymentMethods[state.paymentMethod].title}</strong>
            </span>
          </InfoBenefit>
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
