import React  from 'react';
import Link  from 'next/link';
import LoaderIcon from './LoaderIcon';

// function getWidth() {
// 	// Initialize state with undefined width/height so server and client renders match
// 	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
// 	const [windowSize, setWindowSize] = useState({
// 		width: undefined,
// 		height: undefined,
// 	});
  
// 	useEffect(() => {
// 	  // only execute all the code below in client side
// 	  if (typeof window !== 'undefined') {
// 		// Handler to call on window resize
// 		function handleResize() {
// 			// Set window width/height to state
// 			setWindowSize({
// 				width: window.innerWidth,
// 				height: window.innerHeight,
// 			});
// 		}
	  
// 		// Add event listener
// 		window.addEventListener("resize", handleResize);

// 		// Call handler right away so state gets updated with initial window size
// 		handleResize();
	  
// 			// Remove event listener on cleanup
// 			return () => window.removeEventListener("resize", handleResize);
// 		}
// 	}, []); // Empty array ensures that effect is only run on mount
// 	return windowSize;
// }



// const isBrowser = () => typeof window !== "undefined"

class Slider extends React.Component{

	constructor(props) {
        super(props);
        const imgId = 0;
		this.state = {
			width: 0,
            current: imgId,
            next: this.getNextId(imgId),
            prev: this.getPrevId(imgId),
            move: false,
        };
        
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.transitionSlide = this.transitionSlide.bind(this);

        // enable for autoplay
        this.autoPlay = true;
	}
    
	componentDidMount() {        
		window.addEventListener('resize', this._handleWindowSizeChange);  
        if (this.autoPlay) {
            setInterval(this.handleNext, 7000);
        }
    }
	
	componentWillUnmount() {
		window.removeEventListener('resize', this._handleWindowSizeChange);
	}
	
	_handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};
    
    getPrevId(id) {
        if (id <= 0) {
          return this.props.slides.length - 1;
        }
        return id - 1;
      }

    getNextId(id) {
        if (id >= this.props.slides.length - 1) {
            return 0;
        }
        return id + 1;
    }

    setIndexes(idx, dir) {
        this.setState({
            current: idx,
            prev: this.getPrevId(idx),
            next: this.getNextId(idx),
            dir
        });
    }
    handlePrev() {
        this.transitionSlide('prev');
    }
    
    handleNext() {
        this.transitionSlide('next');
    }
    
    transitionSlide(direction) {
        if (this.moving) return;

        this.setState({
            dir: direction,
            move: true
        });
    
        this.moving = true;
    
        setTimeout(() => {
            this.setState({
                move: false
            });
            if (direction === 'next') {
                this.setIndexes(this.getNextId(this.state.current), 'next');
            } 
            else {
                this.setIndexes(this.getPrevId(this.state.current), 'prev');
            }
            this.moving = false;
        }, 1000);
    
    }


	render() {
        const move = this.state.move ? 'move' : '';
        const dir = this.state.dir + '-dir';
        var link = "";
        var linkPrev = "";
        var linkNext = "";
        if (typeof(this.props.slides[this.state.current]) !== undefined)
        {
            link = this.props.slides[this.state.current].url;
        }
        if (typeof(this.props.slides[this.state.prev]) !== undefined)
        {
                linkPrev = this.props.slides[this.state.prev].url;
        }
        if (typeof(this.props.slides[this.state.next]) !== undefined)
        {
            linkNext = this.props.slides[this.state.next].url;
        }

        return(
            <div className={`slider-wrapper ${dir} ${move}`} >
                <div className="prev pic">
                    <img src={this.props.slides[this.state.prev].image} alt="" />
                    <div className={this.props.slides[this.state.prev].class}>
                        <p className="headerMoto">{this.props.slides[this.state.prev].title}</p>
                        { 
                            linkPrev !== '/'
                            &&
                            <Link href={linkPrev ? linkPrev : '/'} passHref>
                                <span className="sliderLink">Prečítať</span>
                            </Link>
                        }		        
                    </div>
                </div>
                <div className="current pic">
                    <img src={this.props.slides[this.state.current].image} alt="" />
                    <div className={this.props.slides[this.state.current].class}>
                        <p className="headerMoto" >{this.props.slides[this.state.current].title}</p>
                        { 
                            link !== '/'
                            && 
                            <Link href={link ? link : '/'} passHref>
                                <span className="sliderLink">Prečítať</span>
                            </Link>
                        }	
                    </div>
                </div>
                <div className="next pic">
                    <img src={this.props.slides[this.state.next].image} alt="" />
                    <div className={this.props.slides[this.state.next].class}>
                        <p className="headerMoto">{this.props.slides[this.state.next].title}</p>
                        { 
                            linkNext !== '/'
                            &&
                            <Link href={linkNext ?linkNext : '/'} passHref>
                                <span className="sliderLink">Prečítať</span>
                            </Link>
                        }		
                    </div>
                </div>
                <div className="sliderButtons">
                    <button className="sliderButtonRight" onClick={this.handleNext}> <i className="arrow right"></i></button>
                    <button className="sliderButtonLeft" onClick={this.handlePrev}><i className="arrow left"></i></button>
                </div>
            </div>
        )

	}
}

export default Slider;