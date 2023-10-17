import { Doughnut } from "react-chartjs-2";
import { ChartCard } from '.';
import { generateBackgroundColor } from "@/utils";


interface DoughnutGraphicsProps {
    labels:string[];
    data:number[]
    title?:string;
  }

export const DoughnutGraphics: React.FC<DoughnutGraphicsProps> =({ data, labels , title}) => {
    return (
        <ChartCard className='border border-secondaryBorder p-4 rounded-xl'> 
            <ChartCard.Body>
                <ChartCard.Title title={title}/>
                <div className="dataCard customerCard">
                    <Doughnut
                        data={{
                            labels: labels || [],
                            datasets: [
                                {
                                    data: data || [],
                                    backgroundColor:generateBackgroundColor(8, 0.6)
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'right'
                                }
                            },
                        }}
                    />
                </div>
            </ChartCard.Body>
        </ChartCard>
    )
}