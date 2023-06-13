import styled from 'styled-components'
export const OrderCheckoutContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`
export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
