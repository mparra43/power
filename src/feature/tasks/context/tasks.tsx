import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Task } from '../types/index';
import { Spinner } from "@/shared/components";
import { getTacks } from "../services";


type TasksProviderProps = {
  children: ReactNode;
};

export interface TasksContextValue {
  initialLoading: boolean;
  tasks: Task[],
  addTask: (data: Task) => void;
  editTask: (data: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: () => void;
}

const TasksContext = createContext({} as TasksContextValue);

export const useTaskProvaider = (): TasksContextValue => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([])

  const updateTask = () => {
    setTasks(getTacks())
    setInitialLoading(false);
  };
  const addTask = (data: Task) => {
    setTasks([...tasks, {id: `${tasks.length + 1}`, ...data}])
  };

  const editTask = (data: Task) => {
    const tasksUpdate = tasks.map((task) => (task.id === data.id ? data : task));
    setTasks(tasksUpdate);
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  
  };

  
 useEffect(() => {
    updateTask();
  }, []);


  return {
    initialLoading,
    tasks,
    addTask,
    editTask,
    deleteTask,
    updateTask
  };
};


export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const contextValue = useTaskProvaider()

  if (contextValue.initialLoading)
    return (
      <div className="flex justify-center items-center gap-2">
        <Spinner />
      </div>
    );
  return (
    <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>
  );
}

export const useTasks = (): TasksContextValue => useContext(TasksContext)


