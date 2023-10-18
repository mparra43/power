export interface ChartFilterValues {
    initialDate?: string
    finalDate?: string
}

export interface DataItem {
    date: string,
    value: number
}

export interface SalesItem {
    month: string,
    sales: DataItem[]
}
export interface Data {
    averageTicket: DataItem[]
    collaborators: DataItem[]
    region: string;
    sales: SalesItem[],
    users: DataItem[]
}

export interface DataLine {
    label: string,
    data: number[]
}

export interface DataSet extends DataLine {
    backgroundColor: string,
   
}

export interface Sales  {
    monthsOfSales: string[]
    salesByRegion:DataLine[]
    salesTotalByRegion:number[]
}

export interface DataGraphics  {
    averageTicketByRegion:number[]
    collaboratorsByRegion:number[]
    labels: string[]
    monthsOfSales: string[]
    salesByRegion:DataLine[]
    salesTotalByRegion:number[]
    userByRegion:number[]
}