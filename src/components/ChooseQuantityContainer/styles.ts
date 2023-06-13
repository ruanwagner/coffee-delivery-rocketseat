import styled from 'styled-components'
export const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};
    &:focus {
      outline: none;
    }
  }
`
export const IconWrapper = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.purple};
  transition: 0.4s;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
