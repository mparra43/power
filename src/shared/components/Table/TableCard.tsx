import { TableFooter } from "./TableFooter"
import { TableHeader } from "./TableHeader"

interface TableProps {
  children: React.ReactNode
  className?: string
}

export const TableRoot: React.FC<TableProps> = ({ children, className }) => {
  return (
    <article
      className={` ${className}`}
    >
      {children}
    </article>
  )
}

export const TableCard = Object.assign(TableRoot, {
  Header: TableHeader,
  footer: TableFooter
})
