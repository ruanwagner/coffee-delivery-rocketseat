import { CircleIconItem } from './styles'
import { ReactNode } from 'react'
interface CircledIconItemProps {
  color: string
  children: ReactNode
}
export function CircledIconItem({ color, children }: CircledIconItemProps) {
  return <CircleIconItem color={color}>{children}</CircleIconItem>
}
