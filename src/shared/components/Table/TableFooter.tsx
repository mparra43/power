interface Props {
  children: React.ReactNode
  className?: string;
}
export const TableFooter: React.FC<Props> = ({ children , className}) => {
  return <div className={`${className}`}>{children}</div>
}