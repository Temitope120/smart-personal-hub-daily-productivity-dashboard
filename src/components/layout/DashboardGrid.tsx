import KpiCard from '../dashboard/kpi/KpiCard'
import Analytics from '../dashboard/analytics/Analytics'
import Reminder from '../dashboard/reminder/Reminder'
import RecentNotes from '../dashboard/notes/RecentNotes'
import TaskByStatus from '../dashboard/tasks/TaskByStatus'
import HabitCompletionProgress from '../dashboard/habit/HabitCompletionProgress'

const dashboardGrid = () => {
  return (
    <div>
      <div className="grid gap-3 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <KpiCard topText='Total Tasks' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Total Notes' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Habit Summary' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Total Expense' totalCount='24' percentageIncrease='5' />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className='sm:col-span-2 border-2'>
            <Analytics />
          </div>

          <div className='border-2'>
            <Reminder />
          </div>
          <div className='lg:row-span-2 border-2 border-black'>
            <RecentNotes />
            <div className='text-center mt-5 bg-amber-400'>
              Time Tracker
              <p>Stopwatch goes here</p>
            </div>
          </div>

          <div className='border-2'>
           <TaskByStatus />
          </div>

          <div className='border-2'>

            <HabitCompletionProgress />
          </div>
        </div>
      </div>

    </div>
  )
}

export default dashboardGrid
