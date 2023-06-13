import styled from 'styled-components'
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  padding: 2rem 7rem 2rem 7rem;
  nav {
    display: flex;
    gap: 1.5rem;
  }
`
const BaseNavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.2rem;
  line-height: 130%;
`
export const HeaderButton = styled(BaseNavItem)`
  cursor: default;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
export const HeaderLink = styled(BaseNavItem)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(-1.2rem / 2);
    right: calc(-1.2rem / 2);
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 0.75rem;
  }
`
