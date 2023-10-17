interface ChartCardTitleProps {
  title?: string;
}

export const ChartCardTitle: React.FC<ChartCardTitleProps>=({ title }) => {
  return (
    <div>
      <div className='bg-gray-100 rounded-md print:bg-transparent print:p-0 print:text-sm'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}
