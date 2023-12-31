import { Button, Input, Select } from '@/shared/components';
import { useForm } from 'react-hook-form';
import { taskStates } from '../constants';
import { TaskFilters } from '../types';
import { ActionData } from '@/shared/types';



interface TasksHeaderProps {
  handleTasks:(data: TaskFilters) => void
  setShowModal: (data:ActionData) => void
  defaultValues:TaskFilters
}

export const TasksHeader: React.FC<TasksHeaderProps> = ({defaultValues, handleTasks, setShowModal}) => {

  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data: TaskFilters) => {
    handleTasks(data);
    reset();
  };

  return (
    <div className='row my-4'>
      <div className='col-md-10'>
        <form className='d-sm-flex justify-content-start align-items-center w-100 ' onSubmit={handleSubmit(onSubmit)}>
          <Input
            className='form-control'
            classNameContainer='form-group w-md-50 mr-4'
            control={control}
            name='task'
            type='text'
            label='Buscar'
            
          />

          <Select
            className='form-control '
            classNameContainer='form-group w-md-25 mr-4'
            control={control}
            options={taskStates}
            name='state'
            label='Estado'
            rules={{ required: 'El tipo de documento es obligatorio' }}
          />
          <Button className='btn btn-outline-info mt-3 py-1 px-3 ' type='submit' label='Filtar' />
        </form>

      </div>
      <div className='col-md-2 py-1'>
        <Button className='btn btn-outline-info mt-4  py-2 px-2 ' label='Agregar una tarea' onClick={() => setShowModal({action:'add'})} />
      </div>
    </div>
  )
}
