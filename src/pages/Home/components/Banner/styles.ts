import { styled } from 'styled-components'
import introBackgroundImg from '../../../../assets/background.svg'
export const BannerContainer = styled.div`
  background: url(${introBackgroundImg});
  background-size: cover;
  padding: 0 7rem 0 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    color: ${(props) => props.theme['base-title']};
  }
`
export const InfoBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
export const BenefitsContainer = styled.div`
  width: 100%;
  /* margin-top: 4.125rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
export const ImgContainer = styled.div`
  display: flex;
  margin: auto;
`
