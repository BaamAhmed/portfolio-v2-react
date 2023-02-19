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