// import { BarChart } from '@mantine/charts';
import { data } from '../../../data/habitsData';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Analytics = () => {
  return (

    <div>
      <p className="font-medium text-xl md:text-3xl mb-5">Habit Analytics</p>
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


      {/* <BarChart
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
      /> */}

      {/* start recharts bar chart */}
      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="water" fill="#227D53" activeBar={<Rectangle fill="#227D53" stroke="#227D53" />} />
        <Bar dataKey="Gym" fill="#909B97" activeBar={<Rectangle fill="#909B97" stroke="#909B97" />} />
        <Bar dataKey="Study" fill="#5FBD92" activeBar={<Rectangle fill="#5FBD92" stroke="#5FBD92" />} />
      </BarChart>
      {/* end recharts bR CHrts */}
    </div>
  )
}

export default Analytics
