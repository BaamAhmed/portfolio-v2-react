import React from 'react'
import StackCard from '../../components/StackCard'
import {FaNodeJs} from 'react-icons/fa'
import { SiMongodb, SiHeroku, SiExpress, SiBootstrap, SiReact } from 'react-icons/si'

function Nitoxi(){

    return (
        <div className='md:p-10 pb-0'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="font-bold text-violet-500">/Nitoxi</span></h1>
                        <p className='text-lg mb-7'>Nitoxi is a native mobile app for self-administering smell-based COVID-19 tests, featuring local authentication and QR code verification. To make the app even more accessible, I also ported it to the web as a Progressive Web App (PWA). The goal was to provide a semi-reliable, secure, and convenient way for people to test themselves for COVID-19 during the pandemic.</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-violet-500 hover:bg-violet-900' href="https://github.com/BaamAhmed/Nitoxi">GitHub</a>
                            
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <div className='bg-neutral-800 mx-5 p-3 rounded-lg h-32 items-center w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='NodeJS' bgcolor='text-green-400' customIcon={<FaNodeJs className='text-3xl text-green-400'/>} />
                            <StackCard name='Express' bgcolor='text-cyan-400' customIcon={<SiExpress className='text-3xl text-cyan-400'/>} />
                            <StackCard name='React' bgcolor='text-cyan-400' customIcon={<SiReact className='text-3xl text-cyan-400'/>} />
                            
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
export default Nitoxi