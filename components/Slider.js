import React  from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react'



function Slider(props){
	const [sliderState] = useState(props);
    
    const [currentPicState, setCurrentPicState] = useState(0);
    const [nextPicState, setNextPicState] = useState(0);
    const [prevPicState, setPrevPicState] = useState(0);
    const [dirState, setDirState] = useState('');
    const [isMoving, setIsMoving] = useState(0);

    function getPrevId(id) {
        if (id <= 0) {
          return sliderState.length - 1;
        }
        return id - 1;
      }

    function getNextId(id) {
        if (id >= sliderState.length - 1) {
            return 0;
        }
        return id + 1;
    }

    
    function setIndexes(idx, dir) {
        setCurrentPicState(idx);
        setPrevPicState(getPrevId(idx));
        setNextPicState(getNextId(idx));
        setDirState(dir);
    }

    
    function transitionSlide(direction) {
        if (this.moving) return;

        setDirState(direction);
        setIsMoving(true);

        this.moving = true;
    
        setTimeout(() => {
            setIsMoving(false);
            if (direction === 'next') {
                setIndexes(getNextId(current,'next'))
            } 
            else {
                setIndexes(getPrevId(current,'prev'))
            }
            this.moving = false;
        }, 1000);
    
    }

    function handlePrev() {
        transitionSlide('prev');
    }
    
    function handleNext() {
        transitionSlide('next');
    }

    const move = isMoving ? 'move' : '';
    const dir = dirState + '-dir';
    console.log(props)
    // var link = sliderState[currentPicState].url;
    // var linkPrev = sliderState[prevPicState].url;
    // var linkNext = sliderState[nextPicState].url;


	return(
        <div className={`slider-wrapperis ${dirState}-dir  ${move}`} >
            <div className="prev pic">
                <img src={sliderState[prevPicState].picture} alt="" />
                <div className={sliderState[nextPicState].class}>
                    <p className="headerMoto">{sliderState[prevPicState].title}</p>
                    { linkPrev
                        ?
                        <Link className="sliderLink" to={''}>Prečítať</Link>
                        : ""
                    }		        
                </div>
            </div>
            <div className="current pic">
                <img src={sliderState[currentPicState].picture} alt="" />
                <div className={sliderState[currentPicState].class}>
                    <p className="headerMoto" >{sliderState[currentPicState].title}</p>
                    { link
                        ?
                        <Link className="sliderLink" to={link}>Prečítať</Link>
                        : ""
                    }
                </div>
            </div>
            <div className="next pic">
                <img src={sliderState[nextPicState].picture} alt="" />
                <div className={sliderState[nextPicState].class}>
                    <p className="headerMoto">{sliderState[nextPicState].title}</p>
                    { linkNext
                        ?
                        <Link className="sliderLink" to={''}>Prečítať</Link>
                        : ""
                    }		
                </div>
            </div>
            <div className="sliderButtons">
                <button className="sliderButtonRight" onClick={handleNext}> <i className="arrow right"></i></button>
                <button className="sliderButtonLeft" onClick={handlePrev}><i className="arrow left"></i></button>
            </div>
        </div>
	);
}

export default Slider;