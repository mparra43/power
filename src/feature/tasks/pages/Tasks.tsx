import { useEffect, useState } from 'react';
import { Layout } from "@/feature/transversal/components";
import { Table } from "@/shared/components";
import { getTacks } from '../services';
import { HandleModalForm, TaskFilters } from '../types';
import { TbEdit } from 'react-icons/tb';
import { VscTrash } from 'react-icons/vsc';
import { TasksForm, TasksHeader } from '../components';
import useFilterData from '@/shared/hooks/useFilterData';
import { useTasks } from '../context/tasks';
import { ActionData } from '@/shared/types';

export const Tasks = () => {

  const defaultValues = {
    task: '',
    state: '',
    date: '',
    employee: '',
  }


  const { tasks, addTask, editTask, deleteTask } = useTasks();
  const { setFilters, filteredData, setFilteredData } = useFilterData(getTacks(), { state: '', task: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalTask, setModalTask] = useState<HandleModalForm>({ title: 'Agregar tarea', defaultValues, onSave: addTask })

  const handleFilters = (filters: TaskFilters) => {
    setFilters(filters);
  }

  useEffect(() => {
    setFilteredData(tasks)
  }, [tasks]);

  const actions = [{ action: 'edit', button: <TbEdit className='mr-2 text-info' /> }, { action: 'delete', button: <VscTrash className='text-danger' /> }]

  const handleActions = (data: ActionData) => {
    switch (data.action) {
      case 'add':
        setModalTask({ title: 'Agregar tarea', defaultValues, onSave: addTask })
        setShowModal(true)
        break;
      case 'edit':
        setModalTask({ title: 'Editar tarea', defaultValues: data.element, onSave: editTask })
        setShowModal(true)
        break;
      case 'delete':
        deleteTask(data.element.id);
        break;
      default:
        break;
    }

  }

  return (
    <div>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Table
                actions={actions}
                handleActions={handleActions}
                columns={['task', 'state', 'date', 'employee', 'actions']}
                classNameTable=' table border p-4 mb-4 rounded-5 '
                header={<TasksHeader handleTasks={handleFilters} defaultValues={{ state: '', task: '' }} setShowModal={handleActions} />}
                headers={['Tarea', 'Estado', 'Fecha', 'Empleado', 'Acciones']}
                itemsForPage={5}
                rows={filteredData}
              />
            </div>
          </div>
          {showModal && <TasksForm handleTasks={modalTask.onSave} showModal={showModal} setShowModal={setShowModal} title={modalTask.title} defaultValues={modalTask.defaultValues} />}
        </div>
      </Layout>
    </div>
  );
};
