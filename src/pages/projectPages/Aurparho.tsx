import React from 'react'
import StackCard from '../../components/StackCard'
import {FaNodeJs} from 'react-icons/fa'
import { SiBootstrap, SiMongodb, SiHeroku, SiJavascript, SiExpress } from 'react-icons/si'

function Aurparho(){

    return (
        <div className='md:p-10 pb-0'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="font-bold text-yellow-500">/AurParho</span></h1>
                        <p className='text-lg mb-7'>AurParho is a full-stack web app I built solo to make digital class notes more accessible during the pandemic. Designed to be user-friendly, the app allows students to search and browse notes by subject and topic. This was my first big project in web development.</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-yellow-500 hover:bg-yellow-900' href="http://reloadedpk.herokuapp.com">Demo</a>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-emerald-500 hover:bg-emerald-900' href="https://github.com/BaamAhmed/AurParho">GitHub</a>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <div className='bg-neutral-800 mx-5 p-3 rounded-lg h-32 items-center w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='JavaScript' bgcolor='text-yellow-400' customIcon={<SiJavascript className='text-3xl text-yellow-400'/>} />
                            <StackCard name='NodeJS' bgcolor='text-green-400' customIcon={<FaNodeJs className='text-3xl text-green-400'/>} />
                            <StackCard name='Express' bgcolor='text-cyan-400' customIcon={<SiExpress className='text-3xl text-cyan-400'/>} />
                            <StackCard name='Bootstrap' bgcolor='text-violet-400' customIcon={<SiBootstrap className='text-3xl text-violet-400'/>} />
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
export default Aurparho