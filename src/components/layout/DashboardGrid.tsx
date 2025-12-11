import KpiCard from '../dashboard/kpi/KpiCard'
import Analytics from '../dashboard/analytics/Analytics'
import Reminder from '../dashboard/reminder/Reminder'
import RecentNotes from '../dashboard/notes/RecentNotes'
import TaskByStatus from '../dashboard/tasks/TaskByStatus'
import TaskCompletionProgress from '../dashboard/habit/TaskCompletionProgress'
import { Carousel } from '@mantine/carousel';

const dashboardGrid = () => {
  return (
    <div>
      <div className="grid gap-3 mt-6">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <KpiCard topText='Total Tasks' totalCount='24' percentageIncrease='5' delay={0} />
          <KpiCard topText='Total Notes' totalCount='24' percentageIncrease='5' delay={150} />
          <KpiCard topText='Habit Summary' totalCount='24' percentageIncrease='5' delay={300} />
          <KpiCard topText='Total Expense' totalCount='24' percentageIncrease='5' delay={450} />

        </div>

        {/* mobile responsive cards carousel */}
        <div className="grid sm:hidden grid-cols-1 gap-3">
          <Carousel
            withIndicators
            height={200}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            emblaOptions={{ loop: true, align: 'start' }}
          >
            <Carousel.Slide>
              <KpiCard topText="Total Tasks" totalCount='24' percentageIncrease='5' />
            </Carousel.Slide>

            <Carousel.Slide>
              <KpiCard topText="Total Notes" totalCount='24' percentageIncrease='5' />
            </Carousel.Slide>

            <Carousel.Slide>
              <KpiCard topText="Habit Summary" totalCount='24' percentageIncrease='5' />
            </Carousel.Slide>

            <Carousel.Slide>
              <KpiCard topText="Total Expense" totalCount='24' percentageIncrease='5' />
            </Carousel.Slide>
          </Carousel>
        </div>

        {/* end carousel */}

        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-3">
          <div className='sm:col-span-2 rounded-3xl py-4 px-6 bg-white w-full shadow-md'>
            <Analytics />
          </div>

          <div className='rounded-3xl bg-white px-4 md:px-6 pt-5 pb-8 shadow-md'>
            <Reminder />
          </div>
          <div className='lg:row-span-2 rounded-3xl py-4 px-6 bg-white w-full shadow-md'>
            <RecentNotes />
            <div className='text-center mt-5'>
              Time Tracker
              <p>Stopwatch goes here</p>
            </div>
          </div>

          <div className='sm:col-span-2 rounded-3xl bg-white px-4 md:px-6 py-5 shadow-md'>
            <TaskByStatus />
          </div>

          <div className='rounded-3xl py-4 px-6 bg-white w-full shadow-md'>

            <TaskCompletionProgress />
          </div>
        </div>
      </div>

    </div>
  )
}

export default dashboardGrid
