import styled from 'styled-components'
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
`
