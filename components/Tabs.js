import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react'

import Burger from './BurgerButton';

const SidebarData = [
    {
      title: 'Úvodná stránka',
      path: '/',
      listTab: false,
    },
    {
      title: 'O nás',
      path: '/onas',
      listTab: true,
    },
    {
      title: 'Blog',
      path: '/blog',
      listTab: true,
    },
    {
      title: 'Galéria',
      path: '/galeria',
      listTab: true,
    },
    {
      title: 'Videá',
      path: '/videa',
      listTab: true,
    }
];

function NavList(){
    return(
        <div className="nav-list" >
            {SidebarData.map((item, index) => {
                if(item.listTab) {
                    return (
                        <div key={index} className="nav-list__item">
                            <Link href={item.path} passHref>
                                <span className="nav-link">{item.title}</span>
                            </Link>
                        </div>
                    );
                }
            })}
        </div>
    )
}

function NavMenu(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <Burger showSidebar={showSidebar} buttonState={sidebar}/>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link href={item.path} passHref>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        );
                    })}
                    <div className='social-menu'>
                        <a className="instagram" href="https://www.instagram.com/simple__travelers" target="_blank" rel="noopener noreferrer">
                            <Image className='image' src="/icons/icon-instagram.png" alt="instagram" width={55} height={55}/>
                        </a>
                        <a className="facebook" href="https://www.facebook.com/WeAreSimpleTravelers" target="_blank" rel="noopener noreferrer">
                            <Image className='image' src="/icons/icon-facebook.png" alt="facebook" width={55} height={55}/>
                        </a>
                    </div>  
                </ul>
            </nav>
            { sidebar &&
                <div 
                    style={{
                        position:'absolute',
                        width:'100vw',
                        height:'100vh',
                        zIndex:'-1'
                    }} 
                    onClick={showSidebar} 
                />
            }
        </>
    )
}


function GetWidth() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
  
	useEffect(() => {
	  // only execute all the code below in client side
	  if (typeof window !== 'undefined') {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
	  
		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();
	  
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}


function Tabs() {
    const RenderTabs = () => {
        if(GetWidth().width < 768){
            return(<NavMenu/>) 
        }
        else{
            return(<NavList/>)
        }
    }
    return(
        <div className="st-tabs-container">
            <img className="logoTravelers" alt="simpletravelers-logo" src="/icons/travelers.png" />
            <Link  href="/" passHref><h1>Simple Travelers</h1></Link>
            {/* <Link  href="/" passHref><img className='title-simpletravelers' alt="lindatravelers" src="/icons/SimpleTravelers.svg" /></Link> */}
            { RenderTabs() }
        </div>
    )
}

export default Tabs;