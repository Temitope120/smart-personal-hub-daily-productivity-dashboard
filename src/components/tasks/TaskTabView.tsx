import MilestoneGif from '../../assets/milestone-gif.gif'
import type { Milestone } from '../../types/milestone';
import KpiCard from "../dashboard/kpi/KpiCard";
import MilestoneButton from '../tasks/milestoneButton';

type props = {
    milestones: Milestone[],
    onAddMilestone: (name: string) => void;
}

const TaskTabView = ({ milestones, onAddMilestone }: props) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
                <div>
                    <p className="lg:text-3xl font-sembold md:font-medium text-2xl pb-4">Milestones</p>
                    <div className=" min-h-[425px] h-[425px] rounded-2xl py-4 px-4 xl:px-6 shadow-md ">
                        <div className='flex flex-col space-y-4 pt-5 h-[60%]'>
                            {milestones.length !== 0 ? (
                                milestones.map((milestone) => (
                                    <div key={milestone.id} className='font-bold text-[#1B6747] '>
                                        {milestone.milestoneName.toUpperCase()}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <div className="w-full h-full">
                                        <img className="object-cover h-auto w-full" src={MilestoneGif} alt="jet" />
                                    </div>
                                    <p className="font-medium text-base lg:text-lg">There are no milestones for today!</p>
                                    <p className="text-base lg:text-lg inline-block pb-2 text-gray-600">You can create milestones.</p>
                                </>
                            )}

                        </div>

                        <MilestoneButton onAddMilestone={onAddMilestone} />
                    </div>
                </div>
                <div className="md:col-span-2 pb-6">
                    <p className="lg:text-3xl font-sembold md:font-medium text-2xl pb-4">Task Summary</p>
                    <div className=" rounded-2xl py-4 px-4 xl:px-6 shadow-md ">
                        <div className="mb-3">
                            <KpiCard topText='Pending Tasks' totalCount='24' percentageIncrease='5' delay={0} />
                        </div>
                        <KpiCard topText='Completed' totalCount='24' percentageIncrease='5' delay={150} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskTabView
