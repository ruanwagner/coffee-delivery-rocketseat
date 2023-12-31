import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { OrderCheckoutForm } from './components/OrderCheckoutForm'
import { OrderCheckoutContainer } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}
const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormData = OrderData
export function OrderCheckout() {
  const navigate = useNavigate()
  const { cleanCart } = useCart()
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const { handleSubmit } = confirmOrderForm
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/confirmed', {
      state: data,
    })
    cleanCart()
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <OrderCheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <OrderCheckoutForm />
        <SelectedCoffees />
      </OrderCheckoutContainer>
    </FormProvider>
  )
}
