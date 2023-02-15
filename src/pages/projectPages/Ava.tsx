import React from 'react'
import StackCard from '../../components/StackCard'
import { SiTailwindcss, SiOpenai, SiNextdotjs, SiReact, SiJavascript } from 'react-icons/si'

function Ava(){

    return (
        <div className='md:p-10 pb-0'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="font-bold text-cyan-500">/AVA</span></h1>
                        <p className='text-lg mb-7'>Almost complete, the goal of this project is to make technology make more sense to those who may struggle with it. Users can simply type in their questions, and Ava (a GPT3 bot) would be more than happy to help!</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-cyan-500 hover:bg-cyan-900' href="https://avaai.netlify.app">Demo</a>
                            
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <div className='bg-neutral-800 mx-5 p-3 rounded-lg h-32 items-center w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='Next.js' bgcolor='text-white' customIcon={<SiNextdotjs className='text-3xl text-white'/>} />
                            <StackCard name='OpenAI' bgcolor='text-green-400' customIcon={<SiOpenai className='text-3xl text-green-400'/>} />
                            <StackCard name='React' bgcolor='text-cyan-400' customIcon={<SiReact className='text-3xl text-cyan-400'/>} />
                            <StackCard name='JavaScript' bgcolor='text-yellow-400' customIcon={<SiJavascript className='text-3xl text-yellow-400'/>} />
                            <StackCard name='Tailwind' bgcolor='text-cyan-400' customIcon={<SiTailwindcss className='text-3xl text-cyan-400'/>} />
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ava