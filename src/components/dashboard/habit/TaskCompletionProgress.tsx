

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

import type { TooltipIndex } from 'recharts/types/state/tooltipSlice';
import { taskData } from "../../../data/habitsData";
import { useState } from "react";
 
interface PieInfoProps {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}

const COLORS = ["#227D53", "#909B97", "#5FBD92"];

const TaskCompletionProgress = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <p className="font-medium text-xl md:text-3xl mb-5">Task Progress</p>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
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
              // 🔥 Recharts v3 way to apply active styles
              // pieItemProps={(entry, index) => ({
              //   stroke: index === activeIndex ? "#000" : "none",
              //   strokeWidth: index === activeIndex ? 2 : 1.5,
              //   opacity: index === activeIndex ? 1 : 0.75,
              // })}
            >
              {taskData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
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
