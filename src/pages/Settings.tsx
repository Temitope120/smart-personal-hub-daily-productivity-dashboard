
const Settings = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-6">
                <div className="">
                    <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
                        Settings
                    </h2>
                    <div className="flex items-center gap-4 py-4 mb-8">
                        <div className=" h-20 w-20 overflow-hidden">
                            <img className="w-full object-cover h-auto" src="https://cdn.pixabay.com/photo/2013/07/12/13/53/man-147503_1280.png" alt="user image" />
                        </div>
                        <button> change Picture</button>
                        <button> Delete Picture</button>
                    </div>

                    <form action="" >
                        <div className="mb-4">
                            <label htmlFor="profileName" className=' pb-2 block lg:text-xl font-sembold md:font-medium text-lg'>
                                Profile Name
                            </label>
                            <input className="block w-full border-2 p-2 rounded-lg" type="text" name="profileName" placeholder="Mick Lawson" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="userName" className='lg:text-xl font-sembold md:font-medium text-lg pb-2 block'>
                                Username
                            </label>
                            <input className="block w-full border-2 p-2 rounded-lg" type="text" name="userName" placeholder="@MickDgreat" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="about" className='pb-2 block lg:text-xl font-sembold md:font-medium text-lg'>
                                About
                            </label>

                            <textarea name="" id="" rows={6} cols={8} className="block w-full border-2 p-2 rounded-lg">
                                Available for a chat
                            </textarea>
                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}

export default Settings
