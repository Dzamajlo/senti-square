import Card from 'react-bootstrap/Card';

import { BarGraph } from '@/components/dashboard/components/barGraph';
import { PieChart } from '@/components/dashboard/components/pieChart';
import { useGetEntityTypeFrequencyData } from '@/components/dashboard/hooks/getEntityTypeFrequencyData';

export const ChartsDashboard = () => {
  const entityTypeFrequencyData = useGetEntityTypeFrequencyData();

  return (
    <Card>
      <Card.Header as='h5'>3. Frekvencia Typov Entít</Card.Header>

      <Card.Body>
        {entityTypeFrequencyData.length ? (
          <section>
            {/* --- Stlpcovy graf --- */}
            <h5>Frekvencia typov entít (Stĺpcový)</h5>
            <BarGraph entityTypeFrequencyData={entityTypeFrequencyData} />

            <hr className='my-4' />

            {/* --- Kolacovy graf --- */}
            <h5>Frekvencia typov entít (Koláčový)</h5>
            <PieChart entityTypeFrequencyData={entityTypeFrequencyData} />

            <hr className='my-4' />
          </section>
        ) : (
          <p>Žiadne dáta na zobrazenie v grafe. Najprv spracujte súbor.</p>
        )}
      </Card.Body>
    </Card>
  );
};
