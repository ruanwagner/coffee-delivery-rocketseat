import { ReactNode } from 'react'
import { SectionTitleContainer, Subtitle, Title } from './styles'
interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}
export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <Title className="lg">{title}</Title>
        <Subtitle className="">{subtitle}</Subtitle>
      </div>
    </SectionTitleContainer>
  )
}
