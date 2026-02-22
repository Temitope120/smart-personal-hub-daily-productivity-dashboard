import { useDraggable } from '@dnd-kit/react';

const TabContentCard = () => {
    const { ref } = useDraggable({
        id: 'draggable',
    });
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
                <div ref={ref} className="bg-white rounded-2xl p-4 w-full sm:w-60 space-y-4 mt-4 mb-12 shadow-md">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className=" h-20 w-20 overflow-hidden">
                                <img className="w-full object-cover h-auto" src="https://cdn.pixabay.com/photo/2013/07/12/13/53/man-147503_1280.png" alt="user image" />

                            </div>
                            <div>
                                <p className="font-semibold text-base lg:text-lg">Push project update to GitHub</p>
                                <p>02/26 12:11pm</p>
                            </div>
                        </div>



                    </div>

                    <p className="text-gray-500 text-sm lg:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed illum doloremque perferendis laudantium asperiores laboriosam odit sint ut. Architecto?
                    </p>

                    <div className="flex items-center justify-between">

                    </div>
                </div>

            </div>

        </>

    )
}

export default TabContentCard
