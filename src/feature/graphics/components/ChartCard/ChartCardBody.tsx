interface Props {
  children: React.ReactNode
}
export const ChartCardBody: React.FC<Props> = ({ children }) => {
  return (
    <div className='p-3'>
      {children}
    </div>
  )
}