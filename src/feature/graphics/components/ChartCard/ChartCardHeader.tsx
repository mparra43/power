interface Props {
  children: React.ReactNode
}
export const ChartCardHeader: React.FC<Props> = ({ children }) => {
  return <header className='bg-white rounded-lg pt-2 px-3 shadow-lg print:hidden '>{children}</header>
}