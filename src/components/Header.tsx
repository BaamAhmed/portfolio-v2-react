import {useState} from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {HiMoon} from 'react-icons/hi'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    

    return(
        <>
            <head>
                <title>Bassam Ahmed</title>
            </head>
            <div className='fixed z-10 left-0 right-0'>

                <div className="flex justify-between px-6 md:px-12 py-4 headerbg">
                    <p><strong>Bassam</strong>/Ahmed</p>
                    <div className="hidden md:block flex justify-between">
                        <a className="px-3 no-underline hover:overline " href="/">Home</a>
                        <a className="px-3 no-underline hover:overline " href="/about">About</a>
                        <a className="px-3 no-underline hover:overline " href="/projects">Projects</a>
                        <a className="px-3 no-underline hover:overline " href="/experience">Experience</a>
                        <a className="px-3 no-underline hover:overline " href="/contact">Contact</a>
                    </div>
                    <button className='block md:hidden' onClick={handleClick}><CgMenuGridO className='text-xl'/></button>
                    <button className='hidden md:block'><HiMoon className='text-xl'/></button>
                </div>
                {showMenu ?
                <div className="block md:hidden flex flex-col headerbg p-6 pt-0">
                    <a className="py-2 no-underline hover:overline " href="/home">Home</a>
                    <a className="py-2 no-underline hover:overline " href="/about">About</a>
                    <a className="py-2 no-underline hover:overline " href="/projects">Projects</a>
                    <a className="py-2 no-underline hover:overline " href="/experience">Experience</a>
                    <a className="py-2 no-underline hover:overline " href="/contact">Contact</a>
                </div> : null}
            </div>
        </>

    )
}

export default Header