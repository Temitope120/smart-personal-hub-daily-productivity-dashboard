import React from 'react'
import KpiCard from '../dashboard/kpi/KpiCard'
import Analytics from '../dashboard/analytics/Analytics'

const dashboardGrid = () => {
  return (
    <div>
      Dashboard grid would be rendered by Dashboard component. it contains individual components of Analytics, ReminderCard, RecentNotesCard, TaskStatuscard, HabitProgressCricle, TimeTracker

      <div className="grid gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <KpiCard topText='Total Tasks' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Total Notes' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Habit Summary' totalCount='24' percentageIncrease='5' />
          <KpiCard topText='Total Expense' totalCount='24' percentageIncrease='5' />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className='md:col-span-2'>
            <Analytics />
          </div>

          <div>
            Reminders
            <Analytics />
          </div>
          <div className='lg:row-span-2'>
            long height
            <Analytics />
          </div>

          <div>
            progress
            <Analytics />
          </div>

          <div>

            <Analytics />
          </div>
        </div>
      </div>

    </div>
  )
}

export default dashboardGrid
