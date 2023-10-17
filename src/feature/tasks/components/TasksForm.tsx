import { Button, Input, Modal, Select } from '@/shared/components';
import { useForm } from 'react-hook-form';
import { taskStates } from '../constants';
import { Task } from '../types';


interface TasksFormProps {
  handleTasks: (data: Task) => void
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}


export const TasksForm: React.FC<TasksFormProps> = ({ handleTasks, showModal, setShowModal }) => {

  const defaultValues = {
    task: '',
    state: '',
    date: '',
    employee: ''

  };
  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data: Task) => {
    handleTasks(data);
    reset();
  };

  return (

    <Modal show={showModal} onClose={() => setShowModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className='form-control '
          classNameContainer='form-group w-100 mr-4'
          control={control}
          name='task'
          type='text'
          label='Tarea'
          rules={{ required: 'La tarea es obligatoria' }}
        />
        <Select
          className='form-control '
          classNameContainer='form-group'
          control={control}
          options={taskStates}
          name='state'
          label='Estado'
          rules={{ required: 'El estado es obligatorio' }}
        />

        <Input
          className='form-control '
          classNameContainer='form-group'
          label='Fecha'
          name='date'
          type='date'
          control={control}
          rules={{ required: 'La fecha es obligatoria' }}
        />

        <Input
          className='form-control '
          classNameContainer='form-group'
          label='Empleado'
          name='employee'
          type='text'
          control={control}
          rules={{ required: 'El empleado es obligatorio' }}
        />

        <Button className='btn btn-outline-primary mt-3 py-1 px-3' type='submit' label='Guardar' />
        <Button className='btn btn-outline-danger mt-3 py-1 px-3' label='Cancelar' onClick={() => setShowModal(false)} />
      </form>
    </Modal>
  )
}
