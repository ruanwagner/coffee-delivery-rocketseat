import styled from 'styled-components'
export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    text-align: center;
  }
  p {
    text-align: center;
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
export const InfoBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
