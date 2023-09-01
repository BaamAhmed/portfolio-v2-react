import React from 'react'
import {SiNextdotjs, SiFirebase, SiGooglecloud, SiPython} from 'react-icons/si'
import StackCard from '../../components/StackCard'


import Gallery from '../../components/Gallery'

function Noteseek() {
    
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">
                
                
                <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
                    <div>
                        <h1 className="text-6xl font-light mb-6">projects<span className="block mt-5 md:mt-0 md:inline font-bold text-white">/Noteseek</span></h1>
                        <p className='text-lg mb-7'>The idea here is that you can simply search the web for relevant resources, videos, and links by simply uploading and letting the web app scan your document. I'm imagining this would be useful when researching (you can upload a similar paper to fetch other relevant papers) or when learning new concepts (all related KhanAcademy and YouTube videos in the same spot).</p>
                        <div className='flex'>
                            <a className='p-3 px-10 mr-3 text-black rounded-lg bg-white hover:bg-slate-300' href="https://noteseek.vercel.app">Demo</a>   
                        </div>

                    </div>
                    <div className="flex justify-end mt-10">
                        <div className='bg-neutral-800 mx-auto md:mx-5 p-3 rounded-lg h-32 items-center w-full md:w-8/12 max-w-8/12 overflow-y-scroll flex flex-nowrap'>
                            <StackCard name='NextJS' bgcolor='text-white' customIcon={<SiNextdotjs className='text-3xl text-white-400'/>} />
                            <StackCard name='Firebase' bgcolor='text-orange-400' customIcon={<SiFirebase className='text-3xl text-orange-400'/>} />
                            <StackCard name='GCloud' bgcolor='text-green-500' customIcon={<SiGooglecloud className='text-3xl text-green-500'/>} />
                            <StackCard name='Python' bgcolor='text-yellow-500' customIcon={<SiPython className='text-3xl text-yellow-500'/>} />
                            
                        </div>
                    </div>
    
                </div>
                <div>
                    <h1 className="text-5xl font-semibold">gallery</h1>
                    <Gallery projectname={'noteseek'} images={['ss1.png', 'ss2.png', 'ss3.png']} />
                </div>
            </div>
        </div>
    )
}

export default Noteseek