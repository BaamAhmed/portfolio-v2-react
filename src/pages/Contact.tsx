import React from 'react'
const Contact = () => {
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">
                <h1 className="text-5xl font-semibold mb-10">contact</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-10">
                    <a rel="noreferrer" target="_blank" href="https://github.com/BaamAhmed" className="rounded-lg hover:bg-slate-400 bg-red-400 text-center py-3 px-5">
                        <p className="font-semibold">GitHub</p>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://aurparhobucket.s3.ap-south-1.amazonaws.com/Bassam_Ahmed_resume_python.pdf" className="rounded-lg hover:bg-slate-400 bg-yellow-400 text-center py-3 px-5">
                        <p className="font-semibold">Download Resume</p>
                    </a>
                    <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/baamahmed/" className="rounded-lg hover:bg-slate-400 bg-blue-400 text-center py-3 px-5">
                        <p className="font-semibold">LinkedIn</p>
                    </a>
                </div>
                <div className="w-full md:w-6/12">

                    <h4 className="text-3xl mb-3">talk to me</h4>
                    <form action="https://public.herotofu.com/v1/8a6bb1d0-aff7-11ed-bca4-27c965651142" method="post">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <input required name='firstName' placeholder="First Name" type="text" className="rounded-md inputbg py-2 px-4" />
                            <input name='lastName' placeholder="Last Name" type="text" className="rounded-md inputbg py-2 px-4" />
                        </div>
                        <input required name='email' placeholder="Email Address" type="email" className="rounded-md w-full inputbg py-2 px-4 mb-2"/>
                        <textarea required name="msg" placeholder="Go ahead, I'm listening..." className="mb-2 rounded-md inputbg w-full py-2 px-4" id="" cols={30} rows={10}></textarea>
                        <button className="rounded-md bg-purple-500 font-semibold text-center w-full py-2 hover:bg-slate-400">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact