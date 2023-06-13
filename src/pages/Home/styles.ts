import { styled } from 'styled-components'
export const CoffeesContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem 0 3rem;
  gap: 3.2rem;
  margin-top: 1.5rem;
  h2 {
    text-align: center;
  }
`
export const CoffeesListContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
