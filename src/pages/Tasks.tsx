import { useEffect, useState } from 'react';
import TabContentCard from "../components/tasks/TabContentCard"
import TaskTabView from "../components/tasks/TaskTabView";
import type { Task, Status } from '../types/tasks';
import type { Milestone } from '../types/milestone';
import EmptyState from '../assets/empty-table.svg'

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

// const currentMilestones = [
//   { id: 1, milestoneName: "Dashboard UI" },
//   { id: 2, milestoneName: "Auth System" },
// ];


const Tasks = () => {
  const [activeTab, setActiveTab] = useState("todo");
  const [tasks, setTasks] = useState<Task[]>(currentTasks);
  // retrieving milestones from Localstorage to keep them on the UI
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const saved = localStorage.getItem("milestones");
    return saved ? JSON.parse(saved) : [];
  });

  const [milestoneName, setMilestoneName] = useState("");

  // Saving milestone in localstorage
  useEffect(() => {
    localStorage.setItem("milestones", JSON.stringify(milestones));
  }, [milestones]);


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

  const createMilestone = (milestoneName: string) => {
    const newMilestone: Milestone = {
      id: Date.now(),
      milestoneName,
    }

    setMilestones((prev) => {
      const updated = [...prev, newMilestone];
      console.log(updated, "updated milestones");
      return updated;
    });
    setMilestoneName("")
  }



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
      <TaskTabView milestones={milestones}
        onAddMilestone={createMilestone} />

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

              {tabTasks.length || tabTasks.length ? (
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
              ) : (

                  <div className='flex flex-col gap-3 p-4 justify-center items-center '>
                    <div className='h-10 w-10 mx-auto'>
                      <img src={EmptyState} alt="Empty tab image" className='w-full h-auto flex justify-center' />
                    </div>
                    
                  <p className='text-sm lg:text-base xl:text-lg font-medium'>No Task</p>
                  </div>
              ) }
              

            </div>
          );
        })}

      </div>
      {/*end task card */}


    </>
  )
}

export default Tasks
