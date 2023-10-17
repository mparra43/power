import { defaults } from 'chart.js/auto';
import { DefaultValues } from '@/shared/types';


export interface TaskFilters {
    task:string,
    state: string
}

export interface Task  extends TaskFilters {
    id?:string,
    date: string,
    employee: string
}
export interface ActionProps {
    row:Task
}

export interface HandleModalForm {
    title:string
    defaultValues:Task
}