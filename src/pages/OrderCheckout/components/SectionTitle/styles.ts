import styled from 'styled-components'
export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const Title = styled.div`
  color: ${(props) => props.theme['base-title']};
`
export const Subtitle = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
`
