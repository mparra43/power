import { defaults } from 'chart.js/auto';
import { useEffect, useState } from 'react'
import serviceData from '../services/data.json';
import { DoughnutGraphics, BarGraphics, LineGraphics, ChartFilters } from '.';
import { ChartFilterValues, DataGraphics } from '../types';
import { filterDataByDate, getReportByRegion } from '../services';



defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.color = "black";

export const Graphics: React.FC = () => {

    const [data, setData] = useState<DataGraphics | null>(null)

    const handleGraphic = ({initialDate, finalDate}: ChartFilterValues): void => {
        if(initialDate && finalDate){
            const filteredData = filterDataByDate(serviceData.salesByRegion, initialDate, finalDate)
            setData(filteredData)

        }
    }

    useEffect(() => {
        const report = getReportByRegion(serviceData.salesByRegion);
        setData(report)
    }, [])

    return (
        <div className="container p-4 ">
            {data &&
                <>
                    <div className='row'>
                        <div className='col-sm-10 col-md-8 col-lg-5'>
                            <ChartFilters onSuccess={handleGraphic} />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-lg-6 my-4 my-lg-0'>
                            <DoughnutGraphics data={data.salesTotalByRegion} labels={data.labels} title='Ventas por región' />
                        </div>
                        <div className='col-lg-6'>
                            <BarGraphics data={data.userByRegion} label='Usuarios' labels={data.labels} title='Usuarios por región' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6  my-4 my-lg-0'>
                            <LineGraphics labels={data.monthsOfSales} data={data.salesByRegion} title='Ventas por región y mes' />
                        </div>

                        <div className='col-lg-6'>
                            <DoughnutGraphics data={data.averageTicketByRegion} labels={data.labels} title='Ticket por región' />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}