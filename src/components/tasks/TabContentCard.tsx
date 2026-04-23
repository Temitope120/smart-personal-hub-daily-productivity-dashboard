import type { Task, Status } from '../../types/tasks';
import type { Milestone } from '../../types/milestone';

type TaskCardProps = {
    task: Task;
    milestones: Milestone[];
    onMove:(id: number) => void;
};

const TabContentCard = ({ task, milestones, onMove }: TaskCardProps) => {
    const milestone = milestones.find(
        (m) => m.id === task.milestoneId
    );

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className="bg-white rounded-2xl p-4 w-full sm:w-60 space-y-4 mb-3 shadow-md">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-base md:text-lg">{task.title}</p>
                            <p  className="font-semibold text-sm md:text-base text-[#1B6747]">Milestone: {milestone ? milestone.milestoneName : "No milestone"}</p>
                            
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#2d7d5c] border-none rounded-4xl px-4 py-3 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-bold' onClick={()=> onMove(task.id)}>Move to next</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TabContentCard
