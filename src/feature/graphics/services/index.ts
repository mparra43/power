import { Data, DataGraphics, DataItem, DataLine } from '../types';
import { SalesItem } from '../types/index';



export const getReportByRegion = (data: Data[]) => {
    const monthsOfSales: string[] = []
    const labels: string[] = [];
    const userByRegion: number[] = [];
    const salesByRegion: DataLine[] = [];
    const salesTotalByRegion: number[] = [];
    const collaboratorsByRegion: number[] = [];
    const averageTicketByRegion: number[] = [];

    data.forEach(({ averageTicket, collaborators, region, sales, users }: Data) => {
        labels.push(region);
        averageTicketByRegion.push(sumValues(averageTicket));
        collaboratorsByRegion.push(sumValues(collaborators));
        let totalSales = 0
        const totalSalesByMonth: number[] = []
        sales.forEach(({ month, sales }) => {
            !monthsOfSales.includes(month) && monthsOfSales.push(month);
            totalSales += sumValues(sales);
            totalSalesByMonth.push(sumValues(sales));
        })
        salesByRegion.push({ label: region, data: totalSalesByMonth });
        salesTotalByRegion.push(totalSales);
        userByRegion.push(sumValues(users));
    });

    return {
        labels,
        monthsOfSales,
        averageTicketByRegion,
        collaboratorsByRegion,
        salesByRegion,
        salesTotalByRegion,
        userByRegion
    }
};




const sumValues = (data: DataItem[]) => {
    return data.reduce((total, item) => total + item.value, 0);
};


const filterByDateRange = (data: DataItem[], startDate: Date | string, endDate: Date | string) => {
    return data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });
}

export const filterDataByDate = (data: Data[], startDate: Date | string, endDate: Date | string) => {
    
    data.map(({ averageTicket, collaborators,  sales, users }: Data) => {
    const resul = {
        averageTicket:filterByDateRange(averageTicket,startDate, endDate),
        collaborators:filterByDateRange(collaborators,startDate, endDate),
        users:filterByDateRange(users,startDate, endDate),
        sales:sales.map(({ month, sales }) => { return { month, sales:filterByDateRange(sales,startDate, endDate),}})
     }
   
    });
  
    return getReportByRegion(data);
  
}