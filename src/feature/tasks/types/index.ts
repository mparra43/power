
export interface TaskFilters {
    task:string,
    state: string
}

export interface Task  extends TaskFilters {
    id?:string,
    date: string,
    employee: string
}