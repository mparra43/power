import { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { ChartCard } from '.';
import { DataLine, DataSet } from "../types";
import { colorCodeGenerator } from '@/utils';

interface LineGraphicsProps {
    labels: string[];
    data: DataLine[]
    title?: string;
}

export const LineGraphics: React.FC<LineGraphicsProps> = ({data, labels, title }) => {
    const [dataset, setDataset] = useState<DataSet[]>([])

    useEffect(() => {
        const dataGraphics = data?.map((item) => {
            return {
                ...item,
                backgroundColor: colorCodeGenerator(),
            }
        })
        setDataset(dataGraphics)
    }, [ data])
    
  
    return (
        <ChartCard className='border border-secondaryBorder p-4 rounded-xl '>
            <ChartCard.Body>
                <ChartCard.Title title={title} />
                <div className="dataCard customerCard">
                    <Line
                        data={{
                            labels: labels || [],
                            datasets: dataset 
                        }}
                        options={{
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                        }}
                    />
                </div>
            </ChartCard.Body>
        </ChartCard>
    )
}