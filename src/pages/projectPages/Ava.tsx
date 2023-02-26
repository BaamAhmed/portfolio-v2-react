import React from 'react'
import StackCard from '../../components/StackCard'
import { SiTailwindcss, SiOpenai, SiNextdotjs, SiReact, SiJavascript } from 'react-icons/si'

import Gallery from '../../components/Gallery'

function Ava(){

    return (
        <div className='p-6 md:p-10'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-light mb-6">projects<span className="block mt-5 md:mt-0 md:inline font-bold text-cyan-500">/AVA</span></h1>
                        <p className='text-lg mb-7'>Almost complete, the goal of this project is to make technology make more sense to those who may struggle with it. Users can simply type in their questions, and Ava (a GPT3 bot) would be more than happy to help!</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-cyan-500 hover:bg-cyan-900' href="https://ava-devbuild.vercel.app">Demo</a>
                            
                        </div>

                    </div>
                    <div className="flex justify-end mt-10">
                        <div className='bg-neutral-800 mx-auto md:mx-5 p-3 rounded-lg h-32 items-center w-full md:w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='Next.js' bgcolor='text-white' customIcon={<SiNextdotjs className='text-3xl text-white'/>} />
                            <StackCard name='OpenAI' bgcolor='text-green-400' customIcon={<SiOpenai className='text-3xl text-green-400'/>} />
                            <StackCard name='React' bgcolor='text-cyan-400' customIcon={<SiReact className='text-3xl text-cyan-400'/>} />
                            <StackCard name='JavaScript' bgcolor='text-yellow-400' customIcon={<SiJavascript className='text-3xl text-yellow-400'/>} />
                            <StackCard name='Tailwind' bgcolor='text-cyan-400' customIcon={<SiTailwindcss className='text-3xl text-cyan-400'/>} />
                        
                        </div>
                    </div>
                </div>
                <div>
                <h1 className="text-3xl md:text-5xl font-semibold">gallery</h1>
                    <Gallery projectname={'ava'} images={['ss1.png', 'ss2.png', 'ss3.png', 'ss4.png']} />
                </div>
            </div>
        </div>
    )
}
export default Ava