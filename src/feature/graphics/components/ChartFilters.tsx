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
        rules={{ required: 'La fecha inicial es obligatoria' }}
      />
      <Input
        className='form-control'
        classNameContainer='form-group'
        label='Fecha final'
        name='finalDate'
        type='date'
        control={control}
        rules={{ required: 'La fecha final es obligatoria' }}
      />
      <Button className='btn btn-outline-info mt-sm-3' type='submit' label='Filtar' />
    </form>

  )
}
