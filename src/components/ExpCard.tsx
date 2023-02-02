import React from 'react'
import {VscDebugBreakpointData} from 'react-icons/vsc'


const ExpCard = (params: {pointsArr: Array<string>, title: string, company: string, loc: string, bgcolor: string}) => {
    return (
        <div className={`rounded-xl p-5 text-white flex flex-col mb-5 ${params.bgcolor}`}>
            <h3 className="text-3xl font-bold ">{params.title}</h3>
            <h4 className="text-md">{params.company}</h4>
            <h4 className="text-md mb-3"> <em>{params.loc}</em></h4>
            {params.pointsArr && <div className="p-0 md:pl-10">
                {params.pointsArr.map((item, index) => {
                    return (
                        <div key={index} className="flex">
                            <VscDebugBreakpointData className='hidden md:block mb-2 mr-0 md:mr-3 h-5 w-10 flex-none'/>
                            <p className="mb-2">{item}</p>
                        </div>
                    )
                })}
                
            </div> }
        </div>
    )
}

export default ExpCard