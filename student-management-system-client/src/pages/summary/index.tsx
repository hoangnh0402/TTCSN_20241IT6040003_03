import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LabelList, Pie, PieChart } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import ComboBox from './combo-box';
import TablePage from '@/components/ui/data-table';

import { frameworks, chartConfig, summaryData, chartData } from './mock-data';
import { SummaryInterface } from './summary-table/summary';
import { columns } from './summary-table/columns';

const Summary = () => {
  const [cbovalue, setCboValue] = React.useState<string>('');

  React.useEffect(() => {
    console.log(cbovalue);
  }, [cbovalue]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Thống kê điểm tích lũy</CardTitle>
      </CardHeader>
      <CardContent>
        <ComboBox data={frameworks} value={cbovalue} setValue={setCboValue} />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col items-center justify-center">
            <ChartContainer
              config={chartConfig}
              className="w-full aspect-square max-h-[400px]"
            >
              <PieChart>
                <ChartTooltip 
                  content={<ChartTooltipContent nameKey="total" hideLabel />} 
                />
                <Pie 
                  data={chartData} 
                  dataKey="total" 
                  className="fill-primary"
                />
                 <ChartLegend
                  content={<ChartLegendContent nameKey="point" />}
                  className=""
                />
              </PieChart>
            </ChartContainer>
          </div>
          <div>
            <TablePage<SummaryInterface> 
              title="" 
              data={summaryData} 
              columns={columns} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Summary;