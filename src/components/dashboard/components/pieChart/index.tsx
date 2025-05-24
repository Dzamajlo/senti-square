import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { COLORS } from '@/components/dashboard/constants';
import type { EntityTypeFrequencyData } from '@/components/dashboard/hooks/getEntityTypeFrequencyData';

export const PieChart = ({
  entityTypeFrequencyData,
}: {
  entityTypeFrequencyData: Array<EntityTypeFrequencyData>;
}) => (
  <ResponsiveContainer width='100%' height={400}>
    <RechartsPieChart>
      <Pie
        cx='50%'
        cy='50%'
        nameKey='name'
        dataKey='count'
        fill='#8884d8'
        labelLine={false}
        outerRadius={120}
        data={entityTypeFrequencyData}
      >
        {entityTypeFrequencyData.map(({ name }, index) => (
          <Cell key={`cell-${name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />

      <Legend />
    </RechartsPieChart>
  </ResponsiveContainer>
);
