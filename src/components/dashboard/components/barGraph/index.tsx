import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { EntityTypeFrequencyData } from '@/components/dashboard/hooks/getEntityTypeFrequencyData';

export const BarGraph = ({
  entityTypeFrequencyData,
}: {
  entityTypeFrequencyData: Array<EntityTypeFrequencyData>;
}) => (
  <ResponsiveContainer width='100%' height={300}>
    <BarChart
      data={entityTypeFrequencyData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey='count' fill='#8884d8' name='Počet výskytov' />
    </BarChart>
  </ResponsiveContainer>
);
