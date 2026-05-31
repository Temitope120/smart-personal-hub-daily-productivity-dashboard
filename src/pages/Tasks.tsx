import { useEffect, useState } from 'react';
import TabContentCard from "../components/tasks/TabContentCard"
import TaskTabView from "../components/tasks/TaskTabView";
import type { Task, Status } from '../types/tasks';
import type { Milestone } from '../types/milestone';
import EmptyState from '../assets/empty-table.svg'
import CustomModal from '../components/customModal';


type Tab = {
  key: Status;
  label: string;
  count: number;

};


const tabs: Tab[] = [
  { key: "todo", label: "To Do", count: 3, },
  { key: "inprogress", label: "In Progress", count: 5, },
  { key: "completed", label: "Completed", count: 3, },
  { key: "done", label: "Done", count: 3, },
]


const currentTasks: Task[] = [
  { id: 1, title: "Fix bug", status: "todo", milestoneId: 2 },
  { id: 2, title: "Build login UI", status: "inprogress", milestoneId: 2 },
  { id: 3, title: "Write tests", status: "completed", milestoneId: null },
];



const Tasks = () => {
  const [activeTab, setActiveTab] = useState<Status>("todo");

  // retrieving tasks from Localstorage to keep them on the UI

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : currentTasks;
  });

  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");


  // retrieving milestones from Localstorage to keep them on the UI
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const saved = localStorage.getItem("milestones");
    return saved ? JSON.parse(saved) : [];
  });

  const [milestoneName, setMilestoneName] = useState("");

  // Saving tasks in localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

    setTasks((prev: any) =>
      prev.map((task: Task) =>
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


  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: activeTab,
      milestoneId: null,
    }

    setTasks((prev: any) => {
      const updated = [...prev, newTask];
      console.log(updated, "updated tasks");
      return updated;
    });
    setTaskName("");

  }


  const handleCreate = () => {
    const trimmed = taskName.trim();
    if (!trimmed) {
      setError("Task name cannot be empty");
      return;
    }

    if (trimmed.length < 3) {
      setError("Task name must be at least 3 characters");
      return;
    }

    setError("");

    createTask(trimmed);
    setTaskName("");

    setOpen(false);

  };



  const handleClose = () => {
    setOpen(false);
  };




  return (
    <>
      <div className="bg-white flex items-center justify-between pt-8 md:px-4 md:py-6 xl:p-6">
        <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
          Tasks
        </h2>
        <button
          onClick={handleCreate}
          className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-semibold'>
          Add Task
        </button>

      </div>
      <TaskTabView milestones={milestones}
        onAddMilestone={createMilestone} />

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-6 mt-8 lg:pb-12">

        {tabs.map((tab: any) => {
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

              {/* {tabTasks.length >  0 ? (
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
              )} */}



              {tabTasks.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {milestones.map((milestone) => {
                    const milestoneTasks = tabTasks.filter(
                      (t) => t.milestoneId === milestone.id
                    );

                    if (milestoneTasks.length === 0) return null;

                    return (
                      <div key={milestone.id} className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-gray-600">
                          {milestone.milestoneName}
                        </h3>

                        {milestoneTasks.map((task) => (
                          <TabContentCard
                            key={task.id}
                            task={task}
                            milestones={milestones}
                            onMove={moveToNextStage}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-3 p-4 justify-center items-center">
                  <div className="h-10 w-10 mx-auto">
                    <img src={EmptyState} alt="Empty tab image" />
                  </div>

                  <p className="text-sm lg:text-base xl:text-lg font-medium">
                    No Task
                  </p>
                </div>
              )}

            </div>
          );
        })}

      </div>
      {/*end task card */}


      {/* new milestone modal */}
      {/* <Dialog open={open} onClose={handleClose} disableRestoreFocus>
        <DialogTitle>New Milestone</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            value={milestoneName}
            onChange={(e) => {
              setMilestoneName(e.target.value)
              if (error) setError("");
            }}
            label="Milestone Name"
            error={!!error}
            helperText={error}

          />
        </DialogContent>

        <DialogActions>
          <button
            onClick={handleClose}
            className='bg-gray-100 text-dark flex gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className='bg-[#F5F5F5] text-[#1B6747] flex items-center gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Create
          </button>
        </DialogActions>
      </Dialog> */}


      <CustomModal
        open={open}
        title="New Milestone"
        label="Milestone Name"
        value={milestoneName}
        error={error}
        buttonText="Create"
        onClose={handleClose}
        onChange={setMilestoneName}
        onSubmit={handleCreate}
      />


      <CustomModal
        open={open}
        title="New Task"
        label="Task Name"
        value={milestoneName}
        error={error}
        buttonText="Create"
        onClose={handleClose}
        onChange={setMilestoneName}
        onSubmit={handleCreate}
      />


    </>
  )
}

export default Tasks
