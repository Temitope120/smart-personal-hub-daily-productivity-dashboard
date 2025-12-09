import { BarChart } from '@mantine/charts';
import { data } from '../../../data/habitsData';


const Analytics = () => {
  return (

    <div>
      <p className="font-medium text-lg md:text-2xl mb-5">Habit Analytics</p>
      {/*   tooltipProps={{
            contentStyle: {
              backgroundColor: 'red',
              borderRadius: '8px',
              border: 'none',
              color: 'white',
            },
            labelStyle: { color: 'white' },
            itemStyle: { color: 'white' },
          }} */}

      <BarChart
        data={data}
        h={300}
        dataKey="day"
        minBarSize={10}
        tooltipAnimationDuration={200}
        barProps={{ radius: 10 }}
        series={[
          { name: 'Water', color: '#227D53' },
          { name: 'Gym', color: '#5FBD92' },
          { name: 'Reading', color: '#8F9C98' },
        ]}
        tickLine="y"
        gridAxis="xy"
      />

    </div>
  )
}

export default Analytics
