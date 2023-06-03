import React from 'react'
import StackCard from '../../components/StackCard'
import { SiPython, SiOpenai, SiNextdotjs, SiReact, SiJavascript } from 'react-icons/si'

import Gallery from '../../components/Gallery'

function Bashbot(){

    return (
        <div className='p-6 md:p-10'>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-light mb-6">projects<span className="block mt-5 md:mt-0 md:inline font-bold text-purple-500">/BashBot</span></h1>
                        <p className='text-lg mb-7'>BashBot brings the power of OpenAI's gpt-3.5-turbo to your command-line, plus gives you the additional ability to work in the console while talking to ChatGPT, autosaving code that ChatGPT generates, and giving you the ability to quickly save, run, and view that generated code.</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 rounded-lg bg-purple-500 hover:bg-purple-900' href="https://github.com/BaamAhmed/bashbot-dist">Repo</a>
                            
                        </div>

                    </div>
                    <div className="flex justify-end mt-10">
                        <div className='bg-neutral-800 mx-auto md:mx-5 p-3 rounded-lg h-32 items-center w-full md:w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='Python' bgcolor='text-yellow-500' customIcon={<SiPython className='text-3xl text-yellow-500'/>} />
                            <StackCard name='OpenAI' bgcolor='text-green-400' customIcon={<SiOpenai className='text-3xl text-green-400'/>} />
                            
                        </div>
                    </div>
                </div>
                <div>
                <h1 className="text-3xl md:text-5xl font-semibold">gallery</h1>
                    <Gallery projectname={'bashbot'} images={['ss1.png', 'ss2.png', 'ss3.png']} />
                </div>
            </div>
        </div>
    )
}
export default Bashbot