import React from 'react'
import HoverAvatar from '../components/Floater'
import Header from '../components/Header'

const About = () => {
    

    return (
        <>
            <Header/>
            <div className="grid grid-cols-1 p-6 md:p-10 pb-0 md:grid-cols-2 min-h-screen ">
                <div className="flex justify-center mt-10 flex-col">
                    <h1 className="text-6xl font-semibold mb-6">about</h1>
                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sint? Obcaecati voluptas adipisci laborum sequi ipsam saepe consequatur voluptatem impedit temporibus quis molestias iusto consequuntur, vitae in inventore necessitatibus doloremque.</p>
                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sint? Obcaecati voluptas adipisci laborum sequi ipsam saepe consequatur voluptatem impedit temporibus quis molestias iusto consequuntur, vitae in inventore necessitatibus doloremque.</p>

                </div>
                <div className='flex justify-center items-center p-6 md:p-10'>
                    <img src="/pic.jpg" className='rounded-xl drop-shadow-xl' alt="Bassam Ahmed" />
                </div>
            </div>
            

            <HoverAvatar/>
        </>
    )
}

export default About