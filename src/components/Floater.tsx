import React, {useState} from 'react'

function HoverAvatar() {
    const [showBubble, setShowBubble] = useState(false)

    const handleClick = () => {
        setShowBubble(!showBubble)
    }

    return (
        <div className="fixed bottom-0 right-0 w-64 h-64 flex justify-end items-end">
                <div className="flex justify-end items-end w-64 h-64 ">
                {showBubble ?  
                    <div className='self-start mt-24 p-3 absolute mr-5 rounded-lg bg-red-500 w-full' >
                        AI-me coming soon!
                    </div>
                    : null}
                
                <button onClick={handleClick} className='w-40 z-10 w-40 h-40 flex justify-center items-center'>
                    <img alt='floating avatar' className='drop-shadow-xl' src='memoji-gif3.gif' ></img>
                    
                </button>
                
                </div>
                
                
            </div>
    )
}

export default HoverAvatar