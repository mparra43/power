interface Props {
  children: React.ReactNode
}
export const TableHeader: React.FC<Props> = ({ children }) => {
  return <header className='w-100'>{children}</header>
}