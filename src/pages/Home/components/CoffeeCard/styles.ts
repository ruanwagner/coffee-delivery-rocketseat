import { styled } from 'styled-components'
export const CoffeeCardContainer = styled.article`
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`
export const CoffeeName = styled.p`
  margin-bottom: 0.5rem;
`
export const CoffeeDescription = styled.small`
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
`
export const CoffeeCardTags = styled.div`
  width: 100%;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CoffeePrice = styled.div`
  text-align: right;
  color: ${(props) => props.theme['base-text']};
`
export const AddToCartContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
