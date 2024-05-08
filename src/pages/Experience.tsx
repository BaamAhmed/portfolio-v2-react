import React from 'react'
import ExpCard from '../components/ExpCard'
import HoverAvatar from '../components/Floater'

const Experience = () => {
    return (
        <div className="p-6 md:p-10">
            <div className="mt-10">
                <h1 className="text-5xl font-semibold mb-10">experience</h1>
                <div className="grid grid-cols-1">
                    <ExpCard 
                        title='software engineer intern'
                        bgcolor='bg-fuchsia-400'
                        company='PlayStation (Sony Interactive Entertainment)'
                        loc='Waterloo, ON, Canada'
                        pointsArr={[
                            'Addressed SVG asset rendering issues by patching an internal version of the React Native Windows (RNW) open-source framework with modifications to the C++ source code',
                            'Enhanced image rendering logic in RNW, achieving a remarkable 20x boost in performance and memory efficiency in specific processes by adopting a context-sensitive approach',
                            'Contributed to multiple significant updates of an internal Windows-based UI framework written in TypeScript, impacting various components and applications across the system',
                            'Improved testing efficiency and reliability by implementing automated unit and integration testing for an internal TypeScript module; used Jest as the testing framework of choice',
                            'Collaborated in a company-wide, international hackathon and demonstrated teamwork skills in a fast-paced, collaborative environment to deliver a non-trivial PS5 application as part of a team project'
                        ]}
                    />
                    <ExpCard 
                        title='software engineer intern'
                        bgcolor='bg-emerald-500'
                        company='Microart Services Inc.'
                        loc='Markham, ON, Canada'
                        pointsArr={[
                            'Implemented a complete image-search feature using Google Cloud Vision and Firebase Functions for image-to-text, and PostgreSQL full-text search for querying the database using the detected text',
                            'Configured and integrated Google Firebase Storage into the React Native app',
                            'Developed numerous app screens and UI/UX elements according to provided UI designs',
                            'Debugged app’s connection and interaction with BLE (Bluetooth Low Energy) devices'
                        ]}
                    />

                    <ExpCard 
                        title='software engineer intern'
                        bgcolor='bg-red-500'
                        company='Hul Hub (SBT Japan)'
                        loc='Karachi, Pakistan'
                        pointsArr={[
                            'Developed a Jira Cloud app using the Atlassian Forge framework in combination with a modern React stack to automate collection of Jira-based metrics (story points, time logged, etc.) and calculation of various parameters (delivery rate, growth rate, etc.) to gauge developer performance',
                            'Worked in a cross functional team of 15 developers, business analysts, and product managers - learned and cultivated key collaboration skills',
                            'Shortened app’s processing time by 20% by optimizing API calls using grouped JQL (Jira Query Language) queries and pagination'
                        ]}
                    />
                    <ExpCard 
                        title='web developer'
                        bgcolor='bg-blue-400'
                        company='CSwithZain'
                        loc='Karachi, Pakistan'
                        pointsArr={[
                            'Developed and maintained WordPress website for Computer Science instructor',
                            'Utilized LearnDash to set up and maintain courses for different grade levels and sections',
                            'Implemented content control by restricting user access to ensure that only authorized materials were accessible by students'
                        ]}
                    />
                </div>
            </div>
            <HoverAvatar/>
        </div>
    )

}
export default Experience