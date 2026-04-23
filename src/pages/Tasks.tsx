import { useState } from 'react';
import TabContentCard from "../components/TabContentCard"
import TaskTabView from "../components/TaskTabView";
import { DragDropProvider } from '@dnd-kit/react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import type { Task, Status } from '../data/tasks';

const tabs = [
  { key: "todo", label: "To Do", count: 3, countColor: "beige" },
  { key: "inprogress", label: "In Progress", count: 5, countColor: "red" },
  { key: "completed", label: "Completed", count: 3, countColor: "green" },
  { key: "done", label: "Done", count: 3, countColor: "blue" },
]


const currentTasks: Task[] = [
  { id: 1, title: "Fix bug", status: "todo", milestoneId: 2 },
  { id: 2, title: "Build login UI", status: "inprogress", milestoneId: 2 },
  { id: 3, title: "Write tests", status: "completed", milestoneId: null },
];

const currentMilestones = [
  { id: 1, name: "Dashboard UI" },
  { id: 2, name: "Auth System" },
];





const Tasks = () => {
  const [activeTab, setActiveTab] = useState("todo");
  const [tasks, setTasks] = useState<Task[]>(currentTasks);
  const [milestones] = useState(currentMilestones);
  const filteredTasks = tasks.filter((task) => task.status === activeTab);
  const moveToNextStage = (taskId: number) => {
    const nextStatusMap: Record<Status, Status> = {
      todo: "inprogress",
      inprogress: "completed",
      completed: "done",
      done: "done",
    };

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, status: nextStatusMap[task.status] }
          : task
      )
    );
  };



  return (
    <>
      <div className="bg-white flex items-center justify-between pt-8 md:px-4 md:py-6 xl:p-6">
        <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
          Tasks
        </h2>
        <button className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-semibold'>
          Add Task
        </button>

      </div>
      <TaskTabView />

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-6 mt-8 lg:pb-12">

        {tabs.map((tab) => {
          const tabTasks = tasks.filter((t) => t.status === tab.key);

          return (
            <div key={tab.key} className="flex flex-col md:gap-12 xl:gap-4">
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeTab === tab.key
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {tab.label.toUpperCase()} ({tabTasks.length})
              </button>

              <div className="flex flex-col gap-2">
                {tabTasks.map((task) => (
                  <TabContentCard
                    key={task.id}
                    task={task}
                    milestones={milestones}
                    onMove={moveToNextStage}
                  />
                ))}
              </div>

            </div>
          );
        })}

      </div>
      {/*end task card */}


    </>
  )
}

export default Tasks
