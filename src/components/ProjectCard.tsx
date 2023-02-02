import React from 'react'

function ProjectCard(params: {bgcolor: string, name: string, para: string}){
    return (
        <a href={`/projects/${params.name.charAt(0).toUpperCase() + params.name.substring(1).toLowerCase()}`}>

            <div className={`p-5 rounded-xl hover:bg-slate-600 h-full ${params.bgcolor}`}>
                <p className="text-2xl font-bold mb-2">{params.name}</p>
                <p className="">{params.para}</p>
            </div>
        </a>
    )
}

export default ProjectCard