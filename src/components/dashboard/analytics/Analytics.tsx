import { data } from '../../../data/habitsData';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Analytics = () => {
  return (

    <div>
      <p className="font-medium text-xl md:text-3xl mb-5">Habit Analytics</p>
      {/* start recharts bar chart */}
      <BarChart
        style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
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
        <Bar dataKey="Water" fill="#227D53" activeBar={<Rectangle fill="#227D53" stroke="#227D53" />} />
        <Bar dataKey="Gym" fill="#909B97" activeBar={<Rectangle fill="#909B97" stroke="#909B97" />} />
        <Bar dataKey="Study" fill="#5FBD92" activeBar={<Rectangle fill="#5FBD92" stroke="#5FBD92" />} />
      </BarChart>
    </div>
  )
}

export default Analytics
