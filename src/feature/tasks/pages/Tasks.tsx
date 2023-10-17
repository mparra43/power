import { useEffect, useState } from 'react';
import { Layout } from "@/feature/transversal/components";
import { Table } from "@/shared/components";
import { getTacks } from '../services';
import { TaskFilters } from '../types';
import { TbEdit } from 'react-icons/tb';
import { VscTrash } from 'react-icons/vsc';
import { TasksForm, TasksHeader } from '../components';
import useFilterData from '@/shared/hooks/useFilterData';
import { useTasks } from '../context/tasks';

export const Tasks = () => {
  const { tasks, addTask, editTask, deleteTask } = useTasks();
  const { setFilters, filteredData, setFilteredData } = useFilterData(getTacks(), { state: '', task: '' });
  const [showModal, setShowModal] = useState(false)
  const handleFilters = (filters: TaskFilters) => {
    setFilters(filters);
  }

  useEffect(() => {
    setFilteredData(tasks)
  }, [tasks]);


  const actions = <div className='px-2'>
    <TbEdit className='mr-2 text-info' />
    <VscTrash className='text-danger' />
  </div>

  return (
    <div>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Table
                actions={actions}
                columns={['task', 'state', 'date', 'employee', 'actions']}
                classNameTable=' table border p-4 mb-4 rounded-5 '
                header={<TasksHeader handleTasks={handleFilters} defaultValues={{ state: '', task: '' }} setShowModal={setShowModal}/>}
                headers={['Tarea', 'Estado', 'Fecha', 'Empleado', 'Acciones']}
                itemsForPage={5}
                rows={filteredData}
              />
            </div>
          </div>
          { <TasksForm handleTasks={addTask} showModal={showModal}  setShowModal={setShowModal}/>}
        </div>
      </Layout>
    </div>
  );
};
