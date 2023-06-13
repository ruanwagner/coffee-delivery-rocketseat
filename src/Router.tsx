import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderCheckout } from './pages/OrderCheckout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<OrderCheckout />} />
        <Route path="/confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
