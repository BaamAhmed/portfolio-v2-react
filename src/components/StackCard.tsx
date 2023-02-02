import React from 'react'

function StackCard(props: {customIcon: React.ReactNode, name: string, bgcolor: string}) {
    return (
 
        <div>
            <div className={`bg-neutral-900 rounded-lg mr-3 w-24 h-24 bg-red-500 flex justify-between pb-3 pt-6 items-center flex-col`}>
                <div>{props.customIcon}</div>
                <p className={`${props.bgcolor}`}>{props.name}</p>
            </div>
        </div>
       
    )
}

export default StackCard