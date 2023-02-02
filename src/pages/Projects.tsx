import React from 'react'
import HoverAvatar from '../components/Floater'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">

                <p className="text-5xl font-semibold mb-10">projects</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <ProjectCard bgcolor='bg-red-500' name='ReLoaded' para='My biggest project ever, ReLoaded was the first web app of its kind: a platform that allowed users to trade their console video games with other gamers in the city. I launched this project as a startup during June 2022' />
                    <ProjectCard bgcolor='bg-yellow-500' name='AurParho' para='My first ever web app, AurParho aimed to fixed a problem that I saw within my college: inefficient sharing of notes. As such, I built AurParho, so that everyone could access my class notes all in one place.' />
                    <ProjectCard bgcolor='bg-blue-500' name='AVA' para='An AI Chatbot built with the intent of helping people get their tech-related questions answered. Powered by the GPT3 API provided by OpenAI.' />
                    <ProjectCard bgcolor='bg-purple-500' name='Nitoxi' para='My first big React Native project, this mobile app allowed users to self-administer COV19 tests based on their sense of smell. The app used QR codes to verify test validity and user authentication, among other features.' />
                </div>
                <HoverAvatar/>
            </div>
        </div>
    )
}

export default Projects