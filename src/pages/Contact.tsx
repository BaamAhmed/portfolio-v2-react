import React from 'react'
const Contact = () => {
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">
                <h1 className="text-5xl font-semibold mb-10">contact</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-10">
                    <a href="https://github.com/BaamAhmed" className="rounded-lg hover:bg-slate-400 bg-red-400 text-center py-3 px-5">
                        <p className="font-semibold">GitHub</p>
                    </a>
                    <a href="https://aurparhobucket.s3.ap-south-1.amazonaws.com/Bassam_Ahmed_resume_v9.pdf" className="rounded-lg hover:bg-slate-400 bg-yellow-400 text-center py-3 px-5">
                        <p className="font-semibold">Download Resume</p>
                    </a>
                    <a href="https://www.linkedin.com/in/baamahmed/" className="rounded-lg hover:bg-slate-400 bg-blue-400 text-center py-3 px-5">
                        <p className="font-semibold">LinkedIn</p>
                    </a>
                </div>
                <div className="w-full md:w-6/12">

                    <h4 className="text-3xl mb-3">talk to me</h4>
                    <form action="">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <input placeholder="First Name" type="text" className="rounded-md inputbg py-2 px-4" />
                            <input placeholder="Last Name" type="text" className="rounded-md inputbg py-2 px-4" />
                        </div>
                        <input placeholder="Email Address" type="text" className="rounded-md w-full inputbg py-2 px-4 mb-2"/>
                        <textarea name="msg" placeholder="Go ahead, I'm listening..." className="mb-2 rounded-md inputbg w-full py-2 px-4" id="" cols={30} rows={10}></textarea>
                    </form>
                    <button className="rounded-md bg-purple-500 font-semibold text-center w-full py-2 hover:bg-slate-400">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact