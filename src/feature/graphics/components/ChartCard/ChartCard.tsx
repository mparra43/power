import { ChartCardBody } from "./ChartCardBody"
import { ChartCardHeader } from "./ChartCardHeader"
import { ChartCardTitle } from "./ChartCardTitle"


interface ChartCardProps {
  children: React.ReactNode
  className?: string
}

export const ChartCardRoot: React.FC<ChartCardProps> = ({ children, className }) => {
  return (
    <article
      className={`flex flex-col gap-5 w-full ${className}`}
    >
      {children}
    </article>
  )
}

export const ChartCard = Object.assign(ChartCardRoot, {
  Header: ChartCardHeader,
  Body: ChartCardBody,
  Title: ChartCardTitle
})
