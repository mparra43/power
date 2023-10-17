import { useForm } from 'react-hook-form'
import { Button, Input } from '@/shared/components'
import { ChartFilterValues } from '../types';

interface ChartFiltersProps {
  onSuccess(values: ChartFilterValues): void
}

export const ChartFilters: React.FC<ChartFiltersProps> = ({ onSuccess }) => {

  const defaultValues = {
    initialDate: '',
    finalDate: ''
  };
  

  const { control, handleSubmit, reset, } = useForm<ChartFilterValues>({  defaultValues });

  const handleSuccessSubmit = (values: ChartFilterValues): void => {
    onSuccess(values);
    reset()
  }

  return (
    <form className='d-sm-flex justify-content-between align-items-center mb-4' onSubmit={handleSubmit(handleSuccessSubmit)}>
      <Input
        className='form-control '
        classNameContainer='form-group'
        label='Fecha inicial'
        name='initialDate'
        type='date'
        control={control}
      />
      <Input
        className='form-control'
        classNameContainer='form-group'
        label='Fecha final'
        name='finalDate'
        type='date'
        control={control}
      />
      <Button className='btn btn-outline-primary mt-sm-3' type='submit' label='Filtar' />
    </form>

  )
}
