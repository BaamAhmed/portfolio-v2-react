import React from 'react'
import {FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiTwilio, SiHeroku} from 'react-icons/si'
import StackCard from '../../components/StackCard'


import Gallery from '../../components/Gallery'

function Reloaded() {
    
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">
                
                
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="block mt-5 md:mt-0 md:inline font-bold text-red-500">/ReLoaded</span></h1>
                        <p className='text-lg mb-7'>My biggest project ever, Reloaded was the first web app of its kind: a platform that allowed users to trade their console video games with other gamers in the city. I launched this project as a startup during June 2022.</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-cyan-500 hover:bg-red-900' href="http://reloadedpk.herokuapp.com">Demo</a>
                            
                        </div>

                    </div>
                    <div className="flex justify-end mt-10">
                        <div className='bg-neutral-800 mx-auto md:mx-5 p-3 rounded-lg h-32 items-center w-full md:w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='NodeJS' bgcolor='text-green-400' customIcon={<FaNodeJs className='text-3xl text-green-400'/>} />
                            <StackCard name='Tailwind' bgcolor='text-cyan-400' customIcon={<SiTailwindcss className='text-3xl text-cyan-400'/>} />
                            <StackCard name='MongoDB' bgcolor='text-green-500' customIcon={<SiMongodb className='text-3xl text-green-500'/>} />
                            <StackCard name='Twilio' bgcolor='text-red-500' customIcon={<SiTwilio className='text-3xl text-red-500'/>} />
                            <StackCard name='Heroku' bgcolor='text-violet-500' customIcon={<SiHeroku className='text-3xl text-violet-500'/>} />
                            
                        </div>
                    </div>
    
                </div>
                <div>
                    <h1 className="text-5xl font-semibold">gallery</h1>
                    <Gallery projectname={'reloaded'} images={['ss1.png', 'ss2.png', 'ss3.png', 'ss4.png', 'ss5.png', 'ss6.png', 'ss7.png']} />
                </div>
            </div>
        </div>
    )
}

export default Reloaded