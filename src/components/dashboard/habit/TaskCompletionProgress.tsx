

// import {
//   PieChart,
//   Pie,
//   Sector,
//   Tooltip
// } from "recharts";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { taskData } from "../../../data/habitsData";
import { useState } from "react";
 


const COLORS = ["#227D53", "#909B97", "#5FBD92"];

const TaskCompletionProgress = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

 return (
  <>
    <p className="font-medium text-xl md:text-3xl mb-5">
      Task Progress
    </p>

    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={taskData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {taskData.map((entry, index) => (
              <Cell
                key={entry.name ?? index}
                fill={COLORS[index % COLORS.length]}
                stroke={index === activeIndex ? "#000" : "none"}
                strokeWidth={index === activeIndex ? 2 : 1.5}
                opacity={index === activeIndex ? 1 : 0.75}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </>
)
}
export default TaskCompletionProgress
