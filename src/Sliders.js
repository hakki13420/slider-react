import React, { useEffect } from 'react'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import { slides } from "./data.js"
import "./Sliders.css";

const Sliders = () => {
    const [slideIndex, setSlideIndex]=React.useState(0)
    const myTimeOut=React.useRef(null)

    useEffect(() => {
        if (myTimeOut.current) {
            clearTimeout(myTimeOut.current);
        }
        myTimeOut.current=setTimeout(() => {            
                arrowClick('right')
        }, 4000);
    }, [slideIndex])
    
    const arrowClick=(dir)=>{                
        if(dir==='left'){
            if(slideIndex===0){
                setSlideIndex(slides.length-1)                
            }else{                                
                setSlideIndex( slideIndex-1)            
                //incrementIndex();                
            }            
        }else if(dir==='right'){
            if(slideIndex===slides.length-1){                
                setSlideIndex(0)                
            }else{
                setSlideIndex(slideIndex+1)                
            }
        }                
    }

    return (      
    <div className="container">
            <div className="arrow left" 
                onClick={()=>{
                    arrowClick("left");              
                    }
                }
            >
                <ArrowBackIosOutlinedIcon />
            </div>
            <div className="arrow right"
                onClick={()=>{
                    arrowClick("right");                    
                    }
                }
            >
                <ArrowForwardIosOutlinedIcon/>
            </div>
        <div className="sliders__container"
            style={{transform: `translateX(${slideIndex * -100}vw)`}}
        >                
            { 
                slides.map((item, index)=>{
            return <div key={index} className="slide">
                        
                        <img src={item.image} alt="" />
                        <div className="slide__infos">
                            <h1 className="title">{item.title}</h1>
                            <p className="description">
                                {item.description}
                            </p>
                            <div className="slide__footer">
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                })
            }        
        </div>              
    </div>
    )
}

export default Sliders
