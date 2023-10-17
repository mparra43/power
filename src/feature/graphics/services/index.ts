import { Data, DataItem, DataLine} from '../types';

export const getReportByRegion = (data: Data[]) => {

    const monthsOfSales: string[] = []
    const labels: string[] = [];
    const userByRegion: number[] = [];
    const salesByRegion:DataLine[] = [];
    const salesTotalByRegion: number[] = [];
    const collaboratorsByRegion: number[] = [];
    const averageTicketByRegion: number[] = [];

    data.forEach(({ averageTicket, collaborators, region, sales, users }: Data) => {

        labels.push(region);
        averageTicketByRegion.push(sumValues(averageTicket));
        collaboratorsByRegion.push(sumValues(collaborators));
        let totalSales = 0
        const totalSalesByMonth:number[] =[]
        sales.forEach(({ month, sales }) => {
            !monthsOfSales.includes(month) && monthsOfSales.push(month);
            totalSales += sumValues(sales);
            totalSalesByMonth.push(sumValues(sales));
        })
        salesByRegion.push({label:region, data:totalSalesByMonth});
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


// function filterDataByDateRange(data, startDate, endDate) {
//     const filteredData = data.salesByRegion.map(regionData => {
//         const filteredSales = regionData.sales.filter(sale => {
//             const saleDate = new Date(sale.date);
//             return saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
//         });

//         const filteredUsers = regionData.users.filter(user => {
//             const userDate = new Date(user.date);
//             return userDate >= new Date(startDate) && userDate <= new Date(endDate);
//         });

//         const filteredCollaborators = regionData.collaborators.filter(collaborator => {
//             const collaboratorDate = new Date(collaborator.date);
//             return collaboratorDate >= new Date(startDate) && collaboratorDate <= new Date(endDate);
//         });

//         const filteredAverageTicket = regionData.averageTicket.filter(ticket => {
//             const ticketDate = new Date(ticket.date);
//             return ticketDate >= new Date(startDate) && ticketDate <= new Date(endDate);
//         });

//         return {
//             region: regionData.region,
//             sales: filteredSales,
//             users: filteredUsers,
//             collaborators: filteredCollaborators,
//             averageTicket: filteredAverageTicket,
//         };
//     });

//     return filteredData;
// }