import { Bar } from "react-chartjs-2";
import { ChartCard } from '.';
import { generateBackgroundColor } from "@/utils";


interface BarGraphicsProps {
    labels:string[];
    data:number[]
    backgroundColor?:string[];
    title?:string;
    label:string
}


export const BarGraphics: React.FC<BarGraphicsProps> = ({ data, label, labels , title}) => {
    return (
        <ChartCard className='border border-secondaryBorder p-4 rounded-xl'>
            <ChartCard.Body>
                <ChartCard.Title  title={title}/>
                <div className="dataCard customerCard">
                    <Bar
                        data={{
                            labels: labels ||[],
                            datasets: [
                                {
                                    label: label ||'',
                                    data: data || [],
                                    backgroundColor: generateBackgroundColor(8, 0.4),
                                      borderColor:generateBackgroundColor(8, 0.9),
                                      borderWidth: 1

                                },
                            ],
                        }}
                        
                    />
                </div>
            </ChartCard.Body>
        </ChartCard>
    )
}