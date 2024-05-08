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
                    <p className="mb-3">Let's get the boring stuff out of the way first: I'm a <span className="font-bold text-emerald-400">generalist developer</span> with a wide experience in all areas of the stack, from low-level C++ framework implementations in React Native Windows to high-level abstractions in Next.js. I love working on the front end, back end, and everything in between, and I'm always looking for ways to make my code more robust. Oh and I'm also a undergrad Computer Science student at the <span className="font-bold text-yellow-400">University of Waterloo</span></p>
                    <p className="mb-3">Now, one thing you should know about me is that I'm a bit of an organization and <span className="font-bold text-blue-400">productivity geek</span>. I love using Notion and Google Calendar to keep my schedule in order and making sure everything runs like clockwork. I'm also super responsible and reliable (I promise), which I find to be really important in both my academic and professional life.</p>
                    <p className="mb-3">Now, when I'm not coding or studying, I love spending time with cats. I used to have a pet cat named Leo, and he was the cutest thing ever (ask me to see a picture of him please). And, when I'm not hanging out with my feline friends, I like to hit the volleyball court or indulge in my favorite snack - <span className="font-bold text-red-400">SamYang ramen</span>. It's the perfect pick-me-up after a long day of work or school.</p>
                    <p className="mb-3">As you might've guessed by now, I'm in the early stages of my career at this point, and as such, I'm always looking for the next big opportunity to level up my skills and take on <span className="font-bold text-violet-400">new challenges</span>. With my passion for coding, love of cats and ramen, and dedication to organization and productivity, I'm excited to see where my career takes me in the future!</p>
                </div>
                <div className='flex justify-center items-center p-6 md:p-10'>
                    <img src="/pic2.jpeg" style={{height: '80%'}} className='rounded-xl drop-shadow-xl' alt="Bassam Ahmed" />
                </div>
            </div>
            

            <HoverAvatar/>
        </>
    )
}

export default About