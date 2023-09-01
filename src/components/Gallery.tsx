import React, {useState, useRef} from 'react'
import Slider from 'react-slick'
import ReactModal from 'react-modal'

function Gallery (props: {images: Array<String>, projectname: String}) {
    const [showPic, setShowPic] = useState('')
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    let responsive = 2;
    if (windowSize.current[0] < 850){
        responsive = 2;
    } else {
        responsive = 3;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: responsive,
        slidesToScroll: 1,
        autoplay: true
    };
    
    console.log(windowSize.current[0])

    const handleClick = (e: any) => {
        console.log(e.target.currentSrc)
        setShowPic(e.target.currentSrc)
    }
    const handleClose = (e: any) => {
        setShowPic('')
    }

    return (
        <>
        <ReactModal 
            style={{
                overlay: {
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    opacity: 100
                },
                content: {
                    backgroundColor: 'rgba(10, 10, 10, 0)',
                }
            }}
            onRequestClose={handleClose}
            isOpen={!(showPic === '')}
            shouldFocusAfterRender={false}
            shouldCloseOnOverlayClick={true}
            
            className='mx-auto my-32 w-8/12 h-6/12 p-0'
        >
            <button onClick={handleClose}>

            <img src={showPic} alt="" />
            </button>


        </ReactModal>
            <Slider
                className='px-5 mt-10'
                {...settings}
            >
                {props.images.map((item) => {
                    return (
                        <button onClick={handleClick}>
                            <img src={`../${props.projectname}pics/${item}`} className='h-full w-full px-3' alt="helo" />
                        </button>
                    )
                })}
                
                
                
            </Slider>
        </>
    )
}

export default Gallery