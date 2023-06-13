import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../../../assets/banner.svg'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  AboutContainer,
  BannerContainer,
  BenefitsContainer,
  ImgContainer,
  InfoBenefit,
} from './styles'
import { CircledIconItem } from '../../../../components/CircledIconItem'
export function Banner() {
  return (
    <BannerContainer>
      <AboutContainer>
        <div>
          <h1 className="baloo bolder">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <div className="lg">
            Com o coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </div>
        </div>
        <BenefitsContainer>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme['yellow-dark']}>
              <ShoppingCart
                size={18}
                weight="fill"
                color={defaultTheme.white}
              />
            </CircledIconItem>
            <span> Compra simples e segura </span>
          </InfoBenefit>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme['base-text']}>
              <Package size={18} weight="fill" color={defaultTheme.white} />
            </CircledIconItem>
            <span>Embalagem mantém o café intacto</span>
          </InfoBenefit>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme.yellow}>
              <Timer size={18} weight="fill" color={defaultTheme.white} />
            </CircledIconItem>
            <span>Entrega rápida e rastreada</span>
          </InfoBenefit>
          <InfoBenefit>
            <CircledIconItem color={defaultTheme.purple}>
              <Coffee size={18} weight="fill" color={defaultTheme.white} />
            </CircledIconItem>
            <span>O café chega fresquinho até você</span>
          </InfoBenefit>
        </BenefitsContainer>
      </AboutContainer>
      <ImgContainer>
        <img src={banner} alt="" />
      </ImgContainer>
    </BannerContainer>
  )
}
