import { css, styled } from 'styled-components'
interface BgColorIcon {
  color: string
}
export const CircleIconItem = styled.div<BgColorIcon>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ color }) => css`
    background: ${color};
  `}
`
