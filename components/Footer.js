import Link from 'next/link';
import Image from 'next/image';

function Footer(){
    return (
        <div className="pageFooter">
            <div className="footerSignatureContainer">
                <div style={{display:'inline-block'}}>

                    <img src={`../images/photosMobile/AboutLiv-WebsiteMobile-2.jpg`} alt="portraitLiv" />
                    <div className="footerSignature">
                        <h3>Liv</h3>
                        {/* <h5>livus.bozonova@gmail.com </h5> */}
                        <a href="https://www.facebook.com/leewee.banska" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icon-facebook.png" alt="facebook" width={32} height={32}/>
                        </a>    
						<a href="https://www.instagram.com/liv__traveller/" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icon-instagram.png" alt="instagram" width={32} height={32}/>
						</a>
                    </div>
                </div>
                <div style={{display:'inline-block'}}>
                    <div className="footerSignature">
                        <h3>Dan</h3>
                        {/* <h5>danielm.ocenas@gmail.com</h5>  */}
                        <a href="https://www.facebook.com/danielm.ocenas" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icon-facebook.png" alt="facebook" width={32} height={32}/>
                        </a>
                    
						<a href="https://www.instagram.com/daniel_ocenas/" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons/icon-instagram.png" alt="instagram" width={32} height={32}/>
						</a>
                    </div>
                    <img src={`../images/photosMobile/AboutDan-WebsiteMobile-2.jpg`} alt="portraitLiv" />
                </div>
                
                <p className="copyright">©2022 Simple Travelers</p>
                <p className="link-gdpr">
                    <Link href={'/zasadypouzivaniaosobnychudajov' }>
                        Zásady používania osobných údajov
                    </Link>
                </p>
            </div>	   
        </div>
    )
}

export default Footer;