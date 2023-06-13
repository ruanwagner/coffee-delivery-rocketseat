import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { defaultTheme } from '../../../../styles/themes/default'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { AddressForm } from './AdressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
export function OrderCheckoutForm() {
  return (
    <CompleteOrderFormContainer>
      <p className="baloo lg">Complete seu pedido</p>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={defaultTheme['yellow-dark']} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={defaultTheme.purple} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
