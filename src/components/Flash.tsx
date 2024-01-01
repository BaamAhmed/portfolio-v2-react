import React, {useState} from 'react'

function Flash() {
    const [showMsg, setShowMsg] = useState(true)

    function handleClose(){
        setShowMsg(false)
    }

    return (
        <div className='mt-10'>
            {showMsg && 
            <div className="flex flex-col justify-between col-span-1 md:col-span-2 bg-green-600 mt-10 rounded-lg">
                <h1 className='mb-1 p-3'>
                    Hey there! I'm currently available and looking for Summer 2024 Internship opportunities, so if you have something cool for me, please <a className='underline hover:text-green-400' href="/contact">let me know!</a>
                </h1>
                <button onClick={handleClose}>
                    <div className="flex rounded-b-lg justify-center align-center bg-green-700 hover:bg-green-900 py-2">
                    {/* <GrFormClose className='text-white font-bold text-2xl'/> */}
                    <p className='font-semibold'>Dismiss</p>

                    </div>

                </button>

            </div>}
        </div>
    )
}

export default Flash