import React from 'react'
import StackCard from '../../components/StackCard'
import {FaNodeJs} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiHeroku } from 'react-icons/si'

function Ava(){

    return (
        <div className='md:p-10 pb-0'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="font-bold text-cyan-500">/AVA</span></h1>
                        <p className='text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero dolore ex ut placeat repellendus cumque mollitia, temporibus iure, quo voluptatibus, omnis nostrum tenetur commodi. Dicta voluptas consequatur reiciendis ratione.</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-yellow-500 hover:bg-red-900' href="http://reloadedpk.herokuapp.com">Demo</a>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-emerald-500 hover:bg-red-900' href="https://github.com/BaamAhmed/AurParho">GitHub</a>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <div className='bg-neutral-800 mx-5 p-3 rounded-lg h-32 items-center w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='NodeJS' bgcolor='text-green-400' customIcon={<FaNodeJs className='text-3xl text-green-400'/>} />
                            <StackCard name='Tailwind' bgcolor='text-cyan-400' customIcon={<SiTailwindcss className='text-3xl text-cyan-400'/>} />
                            <StackCard name='MongoDB' bgcolor='text-green-500' customIcon={<SiMongodb className='text-3xl text-green-500'/>} />
                            {/* <StackCard name='Twilio' bgcolor='text-red-500' customIcon={<SiTwilio className='text-3xl text-red-500'/>} /> */}
                            <StackCard name='Heroku' bgcolor='text-violet-500' customIcon={<SiHeroku className='text-3xl text-violet-500'/>} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ava