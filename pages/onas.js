import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Head from 'next/head'

function Onas() {
	// const [textAreaWidth, setTextAreaWidth] = useState(300)
	// const refTextArea = React.useRef()

	// const getTextAreaWidth = () => {
	// 	const newWidth = refTextArea.current.clientWidth;
	// 	console.log(refTextArea)
	// 	setTextAreaWidth(newWidth);
	// };

	// useEffect(() => {
	// 	getTextAreaWidth();
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener("resize", getTextAreaWidth);
	// 	return () => window.removeEventListener('resize', getTextAreaWidth);
	// }, []);



    return (
		<div className="page screen-reader-text">
		<Head>
			<title>O nás</title>
			<meta property="og:title"       content="Simple Travelers - O nás" />
			<meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
			<meta name="description"        content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
			<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/AboutUs.jpg" />
			<meta property="og:url" 		content="http://simpletravelers.sk/onas" />
			<link rel="canonical" href="http://simpletravelers.sk/onas" />
			<meta name="keywords" content="$OG_KEYWORDS" />
		</Head>
			<h2>O nás</h2>
			<p>
			Pocit z objavovania krás, ktoré nám svet ponúka je nádherný. No sila našich dobrodružstiev spočíva práve v tom, že všetko prežívame spolu.
			</p>
			<div className="articlePictureLandscape">
				<img 
					alt="Liv a Dan" 
					src="./images/photosFull/AboutUs.jpg" 
				/>
			</div>

			{/* <div 
				style={{ position: 'relative', width: '100%', height: '200px' }}
			>
				<Image
					alt={'Liv a Dan'} 
					src="/images/photosFull/AboutUs.jpg"
					layout="fill" 
					objectFit="contain"
				/>
			</div> */}
			

			<h3>Kto vlastne sme?</h3>
			<p> 
			Dvaja študenti, ktorí si zaumienili, že život je príliš krátky na to, aby ho presedeli doma. Príliš vzácny na to, aby sme nerobili to, čo nás robí šťastnými. Už viac ako tri roky nás naše túlavé topánky vodia po všetkých možných kútoch sveta a doposiaľ sme spolu navštívili sedemnásť krajín. Štyri mesiace sme žili vo Fínsku v extrémnych podmienkach, kde teploty málokedy dosiahli plusové hodnoty. V USA sme najazdili už cez 6 500 km po západnom aj východnom pobreží. Mesiac sme pracovali ako roznášači jedla v Mníchove napriek nulovej schopnosti rozprávať po nemecky. A to je len začiatok. 
			</p>
			<p>
			V každej krajine zaneachávame malú spomienku aj na nás samotných v podobe malých popísaných zámok, ktoré nejde prehliadnuť.  Z jednej strany si ich totiž zdobíme malými hovienkami. Momentálne ich máme pripnutých 35 a už máme nachystané ďalšie.
			</p>
			<div className="articlePictureLandscape">
				<img 
					alt="ZamkaBrnoHovno" 
					src="./images/photosFull/ZamkaBrnoHovno.jpg" 
				/>
			</div>

			<h3>Prečo práve hovienko?</h3>
			<p>
				Je bežné, že ľudia vo vzťahu sa oslovuje milými prezývkami ako miláčik či chrobáčik. My sme si zaužívali prezývku “poopie” čo v preklade z angličtiny znamená - hovienko. No nie je to romantické, dve hovienka túlajúce sa po svete? :)
			</p>
			<h3>O blogu</h3>
			<p>
				Vznikol spontánne, presne tak ako vznikajú naše dobrodružstvá. Prostredníctvom našej stránky by sme sa chceli s vami podeliť o naše zážitky a skúsenosti, ktoré sme počas našich ciest nadobudli. Okrem písania sa venujeme aj tvorbe videí, súvisiacich s naším cestovateľským životom, pri vašej vôli môžete byť súčasťou našich očí a súčasťou našich nôh. Možno vás niečo z našich zážitkov inšpiruje a bude motivovať vašu chuť objavovať svet. A ak sa pri tom budete usmievať, náš zámer bude naplnený.
			</p>
			<h3>Niečo o nás</h3>
			<p>
				Milujeme cestoviny každého druhu a na všetky spôsoby. Sú lacné a ich príprava zaberie pár minút.
			</p>
			<p>                    
				Aktívne sa venujeme športu v akejkoľvek podobe. Viac ako 10 rokov sme súťažne plávali, vďaka čomu sme sa naučili disciplíne a vytrvalosti a dokonca aj vstávať o šiestej ráno. 
			</p>
			<p>
				Cestujeme low-cost - neprespávame v drahých hoteloch a ani sa nestravujeme vo fancy reštauráciach, no napriek tomu sme sas považujeme za bohatých cestovateľov (čo sa týka zážitkov).  
			</p>
			<div className="about-us-container">
				<div className="about-liv">
					<img className="about-us-portrait-picture" src={`./images/photosMobile/AboutLiv.jpg`} alt="Portrait Liv" />
					<div className="about-us-portrait-container">
						<h4>Liv</h4>
						<a href="https://www.facebook.com/leewee.banska" target="_blank" rel="noopener noreferrer">
							<img className="about-us-container-icon" src={`./icons/icon-facebook.png`} alt="facebook-icon"/>
						</a>
						<a href="https://www.instagram.com/liv__traveller/" target="_blank" rel="noopener noreferrer">
							<img className="about-us-container-icon" src={`./icons/icon-instagram.png`} alt="instagram-icon"/>
						</a>
						<a href="https://www.sashe.sk/Liv_creates" target="_blank" rel="noopener noreferrer">
							<img className="about-us-container-icon" src={`./icons/icon-sashe.png`} alt="sashe-icon"/>
						</a>
					</div>
					<p>
						Vyštudovala som francúzske bilingválne gymnázium v Banskej Bystrici a momentálne študujem medzinárodný obchod na Vysokej škole ekonomickej v Prahe. 
						Od mala bol môj život prepojený so športom. Mojou najväčšou vášňou bolo plávanie. 
						Zúčastnila som sa niekoľkých MSR a zahraničných pretekoch, kde mi občas podarili aj medailové umiestnenia. 
						V roku 2017 som sa rozhodla vymeniť plavecké plutvy za trekové topánky a vydala sa objavovať svet. 
						Vo voľnom čase rada ručne vyrábam náušnice a brošne prevažne z polymérovej hmoty a hačkovaním.     
					</p> 
				</div>
			
				<div className="about-dan">
					<img className="about-us-portrait-picture" src={`./images/photosMobile/AboutDan.jpg`} alt="Portrait Dan"/>
					<div className="about-us-portrait-container">
						<h4>Dan</h4>
						<a href="https://www.facebook.com/danielm.ocenas" target="_blank" rel="noopener noreferrer">
							<img className="about-us-container-icon" src={`./icons/icon-facebook.png`} alt="facebook-icon"/>
						</a>
						<a href="https://www.instagram.com/daniel_ocenas/" target="_blank" rel="noopener noreferrer">
							<img className="about-us-container-icon" src={`./icons/icon-instagram.png`} alt="instagram-icon"/>
						</a>
					</div>
					<p>
					Momentálne som až po uši zahltený programovaním a IT, ktoré študujem na VUT v Brne. 
					Únik z tohto kolobehu nachádzam počas turistík na vrcholoch hôr,
					kde si môžem vychutnať prírodu ale rovnako sú pre mňa zdroj novej energie.
					Svoju kreativitu sa snažím obohatiť pri tvorení fotiek prírody, nočnej oblohy a časozberných videí.
					Zvyšok času a energie venujem behu, pri ktorom môžem prekonávať sám seba. 
					Avšak zo všetkého mám najradšej moju Liv a spoznávanie sveta s ňou.     
					</p> 
				</div>
			</div>
		</div>
    )
}

export default Onas;