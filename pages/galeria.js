
import Gallery  from 'react-grid-gallery';
import ImageGrid from '../components/ImageGrid';

const IMAGES = [
	// bryce bez nas
	// la ruzove kridla
	
	
	{
		src: './images/photosFull/TeryhoPleso.jpg',
		thumbnail: './images/photosMobile/TeryhoPleso.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Oslava narodenín Liv na Téryho chate, Vysoké Tatry, december 2020",
	},
	{
		src: './images/photosFull/TeryhoUs.jpg',
		thumbnail: './images/photosMobile/TeryhoUs.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Oslava narodenín Liv na Téryho chate, Vysoké Tatry, december 2020",
	},
	{
		src: './images/photosFull/VRInverzia.jpg',
		thumbnail: './images/photosMobile/VRInverzia.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Inverzia na Veľkom Rozsutci, Malá Fatra, november 2020",
	},
	{
		src: './images/photosFull/VRSmoothClouds.jpg',
		thumbnail: './images/photosMobile/VRSmoothClouds.jpg',
		thumbnailWidth: 340,
		thumbnailHeight: 212,
		caption:"Hladučké oblaky pod Veľkým rozsutcom, v pozadí Choď a Nízke Tatry, Malá Fatra, november 2020",
	},
	{
		src: './images/photosFull/VRInverziaSilueta.jpg',
		thumbnail: './images/photosMobile/VRInverziaSilueta.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Inverzia na Veľkom Rozsutci, Malá Fatra, november 2020",
	},
	{
		src: './images/photosFull/BBJesen.jpg',
		thumbnail: './images/photosMobile/BBJesen.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Banskobystrická jeseň,október 2020",
	},
	{
		src: './images/photosFull/ZnojmoWalk.jpg',
		thumbnail: './images/photosMobile/ZnojmoWalk.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Znojemské uličky, október 2020",
	},
	{
		src: './images/photosFull/ZnojmoBrana.jpg',
		thumbnail: './images/photosMobile/ZnojmoBrana.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Znojemské opevnenie, október 2020",
	},
	{
		src: './images/photosFull/MikulovVyhlad.jpg',
		thumbnail: './images/photosMobile/MikulovVyhlad.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Západ slnka nad Mikulovským zámkom, Mikulov CZ, október 2020",
	},
	{
		src: './images/photosFull/MikulovBrana.jpg',
		thumbnail: './images/photosMobile/MikulovBrana.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Vstupná brána do Mikulovského zámku, Mikulov CZ, október 2020",
	},
	{
		src: './images/photosFull/LedniceZamok.jpg',
		thumbnail: './images/photosMobile/LedniceZamok.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Lednický zámok, Lednice CZ, október 2020",
	},
	{
		src: './images/photosFull/NTDurkovaSunset.jpg',
		thumbnail: './images/photosMobile/NTDurkovaSunset.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Západ slnka na Ďurkovej, Nízke Tatry, september 2020",
	},
	{
		src: './images/photosFull/CRVyskok.jpg',
		thumbnail: './images/photosMobile/CRVyskok.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Romantika na Zadare, Zadar HR, august 2020",
	},
	{
		src: './images/photosFull/CRKlobuk.jpg',
		thumbnail: './images/photosMobile/CRKlobuk.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Romantika na Zadare, Zadar HR, august 2020",
	},
	{
		src: './images/photosFull/SNPNTKosariska.jpg',
		thumbnail: './images/photosMobile/SNPNTKosariska.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Košariská počas Cesty hrdinov SNP, Nízke Tatry, júl 2020",
	},
	{
		src: './images/photosFull/VFPloskaDan.jpg',
		thumbnail: './images/photosMobile/VFPloskaDan.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Ploská - Veľká Fatra, júl 2020",
	},
	{
		src: './images/photosFull/VFOstredokUs.jpg',
		thumbnail: './images/photosMobile/VFOstredokUs.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,				
		caption:"Ostredok - Veľká Fatra -, júl 2020",
	},
	{
		src: './images/photosFull/VFPloskaBorisov.jpg',
		thumbnail: './images/photosMobile/VFPloskaBorisov.jpg',
		thumbnailWidth: 550,
		thumbnailHeight: 212,
		caption:"Pohľad na Ploskú, Šoproň a Borišov (z ľava) - Veľká Fatra, júl 2020",
	},
	{
		src: './images/photosFull/srdcovky/RebrikAlone.jpg',
		thumbnail: './images/photosMobile/srdcovky/RebrikAlone.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Rebrík do neba - Dúbravica, máj 2020",
	},
	{
		src: './images/photosFull/srdcovky/RebrikLiv.jpg',
		thumbnail: './images/photosMobile/srdcovky/RebrikLiv.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Rebrík do neba - Dúbravica, máj 2020",
	},
	{
		src: './images/photosFull/srdcovky/OstraEastDan.jpg',
		thumbnail: './images/photosMobile/srdcovky/OstraEastDan.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Ostrá - Veľká Fatra, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/OstraKriz.jpg',
		thumbnail: './images/photosMobile/srdcovky/OstraKriz.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Ostrá - Veľká Fatra, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/OstraScarp.jpg',
		thumbnail: './images/photosMobile/srdcovky/OstraScarp.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Ostrá - Veľká Fatra, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/OstraSide.jpg',
		thumbnail: './images/photosMobile/srdcovky/OstraSide.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Ostrá - Veľká Fatra, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/KralickyVodopadLandscape.jpg',
		thumbnail: './images/photosMobile/srdcovky/KralickyVodopadLandscape.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Králický vodopád - Kremnické vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/KralickyVodopadPriroda.jpg',
		thumbnail: './images/photosMobile/srdcovky/KralickyVodopadPriroda.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Cesta ku Králickému vodopádu - Kremnické vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/KralickyVodopadPrirodaLiv.jpg',
		thumbnail: './images/photosMobile/srdcovky/KralickyVodopadPrirodaLiv.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Cesta ku Králickému vodopádu - Kremnické vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/KralickyVodopadHang.jpg',
		thumbnail: './images/photosMobile/srdcovky/KralickyVodopadHang.jpg',
		thumbnailWidth: 220,
		thumbnailHeight: 212,
		caption:"Cesta ku Králickému vodopádu - Kremnické vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/SulovView.jpg',
		thumbnail: './images/photosMobile/srdcovky/SulovView.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Súľovské skaly - Súľovské vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/ZrakovaPyramida.jpg',
		thumbnail: './images/photosMobile/srdcovky/ZrakovaPyramida.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Zraková pyramída - Súľovské vrchy, apríl 2020",
	},
	{
		src: './images/photosFull/srdcovky/KriznaPano.jpg',
		thumbnail: './images/photosMobile/srdcovky/KriznaPano.jpg',
		thumbnailWidth: 550,
		thumbnailHeight: 212,
		caption:"Panoráma z vrchu Krížna - Veľká Fatra, február 2020",
	},
	{
		src: './images/photosFull/srdcovky/KriznaJumpLiv.jpg',
		thumbnail: './images/photosMobile/srdcovky/KriznaJumpLiv.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Liv vo výskoku radosti pri zdolaní zimného výstupu na Krížnu - Veľká Fatra, február 2020",
	},
	{
		src: './images/photosFull/MVSunrise.jpg',
		thumbnail: './images/photosMobile/MVSunrise.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Pred východom slnka nad Monument Valley - Utah USA, september 2019",
	},
	{
		src: './images/photosFull/MVMorning.jpg',
		thumbnail: './images/photosMobile/MVMorning.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Východ slnka nad Monument Valley - Utah USA, september 2019",
	},
	{
		src: './images/photosFull/ZionAnglesLandingPure.jpg',
		thumbnail: './images/photosMobile/ZionAnglesLandingPure.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Angels Landing - Zion National Park USA, september 2019",
	},
	{
		src: './images/photosFull/SDSunsetSiluethe.jpg',
		thumbnail: './images/photosMobile/SDSunsetSiluethe.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Silueta Liv pri západe slnka na pláži - San Diego USA, september 2019",
	},
	{
		src: './images/photosFull/SDSunsetChill.jpg',
		thumbnail: './images/photosMobile/SDSunsetChill.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Užívanie si západajúceho slnka - San Diego USA, september 2019",
	},
	{
		src: './images/photosFull/RD66Road.jpg',
		thumbnail: './images/photosMobile/RD66Road.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Prvý krát na Road 66 - California USA, september 2019",
	},
	{
		src: './images/photosFull/SFLombardiStreetBus.jpg',
		thumbnail: './images/photosMobile/SFLombardiStreetBus.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Výhliadkový autobus na Lombardi street - San Francisco USA, september 2019",
	},
	{
		src: './images/photosFull/SFBernalHeights.jpg',
		thumbnail: './images/photosMobile/SFBernalHeights.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Bernal Heights - San Francisco USA, september 2019",
	},
	{
		src: './images/photosFull/SFNoBridge.jpg',
		thumbnail: './images/photosMobile/SFNoBridge.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Golden Gate - San Francisco USA, september 2019",
	},
	{
		src: './images/photosFull/DVjump.jpg',
		thumbnail: './images/photosMobile/DVjump.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Badwater Basin - Death Valley National Park USA, september 2019",
	},
	{
		src: './images/photosFull/DVZabrisky.jpg',
		thumbnail: './images/photosMobile/DVZabrisky.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Zabriskie Point - Death Valley National Park USA, september 2019",
	},
	{
		src: './images/photosFull/GCLivPano.jpg',
		thumbnail: './images/photosMobile/GCLivPano.jpg',
		thumbnailWidth: 550,
		thumbnailHeight: 212,
		caption:"Panoráma Grand Canyonu - Arizona USA, september 2019",
	},
	{
		src: './images/photosFull/GCContrastView.jpg',
		thumbnail: './images/photosMobile/GCContrastView.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Grand Canyon - Arizona USA, september 2019",
	},
	{
		src: './images/photosFull/BryceSunrise.jpg',
		thumbnail: './images/photosMobile/BryceSunrise.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Východ slnka v Bryce Canyone - Utah USA, september 2019",
	},
	{
		src: './images/photosFull/YGlacierPointTrail3.jpg',
		thumbnail: './images/photosMobile/YGlacierPointTrail3.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Výhľad z turistickej cesty na Glacier Point - Yosemite National Park USA, september 2019",
	},
	{
		src: './images/photosFull/YosemiteHalfDome.jpg',
		thumbnail: './images/photosMobile/YosemiteHalfDome.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Výhľad na Half Dome z Glacier Point - Yosemite National Park USA, september 2019",
	},
	{
		src: './images/photosFull/SeqFallen.jpg',
		thumbnail: './images/photosMobile/SeqFallen.jpg',
		thumbnailWidth: 230,
		thumbnailHeight: 212,
		caption:"Spadnutý strom sekvoja blokujúci chodník - Sequoia National Forest USA, september 2019",
	},
	{
		src: './images/photosFull/HorseShoe.jpg',
		thumbnail: './images/photosMobile/HorseShoe.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Horseshoe Bend - Arizona USA, september 2019",
	},
	{
		src: './images/photosFull/LVBellagio.jpg',
		thumbnail: './images/photosMobile/LVBellagio.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Fontána pred kasínom Bellagio - Las Vegas USA, september 2019",
	},
	{
		src: './images/photosFull/LVNY.jpg',
		thumbnail: './images/photosMobile/LVNY.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Kasíno New York - Las Vegas USA, september 2019",
	},
	{
		src: './images/photosFull/LVCircus.jpg',
		thumbnail: './images/photosMobile/LVCircus.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Západ slnka nad kasínom Circus - Las Vegas USA, september 2019",
	},
	{
		src: './images/photosFull/LVSignUs.jpg',
		thumbnail: './images/photosMobile/LVSignUs.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Obľubená fotogragická zastávka vítajúca turistov - Las Vegas USA, september 2019",
	}, 
	{
		src: './images/photosFull/MojaveJoshuaTreeDetail.jpg',
		thumbnail: './images/photosMobile/MojaveJoshuaTreeDetail.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Joshua Tree - Mojave National Preserve USA, september 2019",
	}, 
	{
		src: './images/photosFull/MojaveTrees.jpg',
		thumbnail: './images/photosMobile/MojaveTrees.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Joshua Trees - Mojave National Preserve USA, september 2019",
	},
	{
		src: './images/photosFull/LAVeniceBeach.jpg',
		thumbnail: './images/photosMobile/LAVeniceBeach.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Venice Beach - Los Angeles USA, september 2019",
	},
	{
		src: './images/photosFull/LALifeguardPride.jpg',
		thumbnail: './images/photosMobile/LALifeguardPride.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Plavčícka veža na Venice Beach - Los Angeles USA, september 2019",
	},
	{
		src: './images/photosFull/LAPalms.jpg',
		thumbnail: './images/photosMobile/LAPalms.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Beverly Hills - Los Angeles USA, september 2019",
	}, 
	{
		src: './images/photosFull/LASunsterRoad.jpg',
		thumbnail: './images/photosMobile/LASunsterRoad.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Západ slnka na ulici v Santa Monica - Los Angeles USA, september 2019",
	}, 
	{
		src: './images/photosFull/LASWHouse.jpg',
		thumbnail: './images/photosMobile/LASWHouse.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Spanish Village Art Center - San Diego USA, september 2019",
	},
	{
		src: './images/photosFull/LAGriffith.jpg',
		thumbnail: './images/photosMobile/LAGriffith.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Pohľad na Los Angeles z Griffitovho observatória - Los Angeles USA, september 2019",
	},
];




const CestaSNPIMAGES = [
	{
		src: './images/photosFull/SNPznacka.jpg',
		thumbnail: './images/photosMobile/SNPznacka.jpg',
		thumbnailWidth: 400,
		thumbnailHeight: 212,
		caption:"Približné značenie trasy Cesty hrdinov SNP ako prechádza Slovenskom, júl 2020",
	},
	{
		src: './images/photosFull/SNPVeci.jpg',
		thumbnail: './images/photosMobile/SNPVeci.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Pred cestou sme sa odfotili s kompletnou výbavou, júl 2020",
	},
	{
		src: './images/photosFull/SNPDuklaPamatnik.jpg',
		thumbnail: './images/photosMobile/SNPDuklaPamatnik.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Pamätník čs. armádneho zboru, Dukliansky Priesmyk, júl 2020",
	},
	{
		src: './images/photosFull/SNPDuklaVojak.jpg',
		thumbnail: './images/photosMobile/SNPDuklaVojak.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Pamätník čs. armádneho zboru, Dukliansky Priesmyk, júl 2020",
	},
	{
		src: './images/photosFull/SNPLietadlo.jpg',
		thumbnail: './images/photosMobile/SNPLietadlo.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Vojenské lietadlo, Dukliansky Priesmyk, júl 2020",
	},
	{
		src: './images/photosFull/SNPPosed.jpg',
		thumbnail: './images/photosMobile/SNPPosed.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Kempovanie neďaleko dedinky Medvedie, naša prvá noc na ceste, júl 2020",
	},
	{
		src: './images/photosFull/SNPBardejovskeKupele.jpg',
		thumbnail: './images/photosMobile/SNPBardejovskeKupele.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Bardejovské kúpele, lávka priateľstva, júl 2020",
	},
	{
		src: './images/photosFull/SNPBardejovUs.jpg',
		thumbnail: './images/photosMobile/SNPBardejovUs.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Námestie v Bardejove, júl 2020",
	},
	{
		src: './images/photosFull/SNPHmlaLiv.jpg',
		thumbnail: './images/photosMobile/SNPHmlaLiv.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Strom sa zjavil v hmle, júl 2020",
	},
	{
		src: './images/photosFull/SNPSkalisko.jpg',
		thumbnail: './images/photosMobile/SNPSkalisko.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Ranná inverzia na Skalisku (Slovenské rudohorie), júl 2020",
	},
	{
		src: './images/photosFull/SNPGalovaUtulna.jpg',
		thumbnail: './images/photosMobile/SNPGalovaUtulna.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Naša obľúbená útulňa Gálová, júl 2020",
	},
	{
		src: './images/photosFull/SNPTelgartMost.jpg',
		thumbnail: './images/photosMobile/SNPTelgartMost.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Telgártsky most, foto vybraná do 30 najlepších fotiek súťaže PRO.Laika ČESKO A SLOVENSKO 2020 , júl 2020",
	},
	{
		src: './images/photosFull/SNPChopok.jpg',
		thumbnail: './images/photosMobile/SNPChopok.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Najväčšia orientačná značka na trase, júl 2020",
	},
	{
		src: './images/photosFull/SNPKamzik.jpg',
		thumbnail: './images/photosMobile/SNPKamzik.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Tatranský kamzík, júl 2020",
	},
	{
		src: './images/photosFull/SNPNTKosariska.jpg',
		thumbnail: './images/photosMobile/SNPNTKosariska.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Košariská, Nízke Tatry, júl 2020",
	},
	{
		src: './images/photosFull/SNPNTChill.jpg',
		thumbnail: './images/photosMobile/SNPNTChill.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Posedenie na Chabenci, Nízke Tatry, júl 2020",
	},
	{
		src: './images/photosFull/SNPKralovaStudnaSilueta.jpg',
		thumbnail: './images/photosMobile/SNPKralovaStudnaSilueta.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Večerné fotenie na kráľovej studni, august 2020",
	},
	{
		src: './images/photosFull/SNPStanNight.jpg',
		thumbnail: './images/photosMobile/SNPStanNight.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Náš stan s nočnou oblohou, august 2020",
	},
	{
		src: './images/photosFull/SNPStanMorning.jpg',
		thumbnail: './images/photosMobile/SNPStanMorning.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Stanovanie počas Cesty hrdinov SNP, august 2020",
	},
	{
		src: './images/photosFull/SNPKranieVDzungli.jpg',
		thumbnail: './images/photosMobile/SNPKranieVDzungli.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Turistický chodník na niektorých miestach vyzerá ako džungľa, august 2020",
	},
	{
		src: './images/photosFull/SNPCicmany.jpg',
		thumbnail: './images/photosMobile/SNPCicmany.jpg',
		thumbnailWidth: 300,
		thumbnailHeight: 212,
		caption:"Čičmianska architektúra, august 2020",
	},
	{
		src: './images/photosFull/SNPVarenie.jpg',
		thumbnail: './images/photosMobile/SNPVarenie.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Stravovanie počas Cesty hrdinov SNP, august 2020",
	},
	{
		src: './images/photosFull/SNPSeno.jpg',
		thumbnail: './images/photosMobile/SNPSeno.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Niekde na lúke, august 2020",
	},
	{
		src: './images/photosFull/SNPObecnice.jpg',
		thumbnail: './images/photosMobile/SNPObecnice.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Západ slnka pri rozhľadni obecnice, august 2020",
	},
	{
		src: './images/photosFull/SNPMohyla.jpg',
		thumbnail: './images/photosMobile/SNPMohyla.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Štefánikova mohyla, Bradlo, august 2020",
	},
	{
		src: './images/photosFull/SNPMohylaFront.jpg',
		thumbnail: './images/photosMobile/SNPMohylaFront.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Spoločná foto s parťákmi turistami Líviou a Patrikom, august 2020",
	},
	{
		src: './images/photosFull/SNPVapennaVrch.jpg',
		thumbnail: './images/photosMobile/SNPVapennaVrch.jpg',
		thumbnailWidth: 180,
		thumbnailHeight: 212,
		caption:"Vápenná, august 2020",
	},
	{
		src: './images/photosFull/SNPKonskeHlavy.jpg',
		thumbnail: './images/photosMobile/SNPKonskeHlavy.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
		caption:"Pri rozcestníku Konské hlavy v Malých Karpatoch sa naozaj nachádzajú konské hlavy, august 2020",
	},
];



function Galeria() {
    return (
		<div className="page screen-reader-text">
            <h2>Galéria</h2>
            <h3>Kolekcia našich najlepších fotiek</h3>
            <Gallery  
                images={IMAGES} 
                enableenableImageSelection={false}
				rowHeight={212}
				backdropClosesModal={true}
            />
			{/* <ImageGrid images={IMAGES}/> */}
			<br/>
            {/* <h3>Cesta hrdinov SNP</h3> */}
			<Gallery  
				images={CestaSNPIMAGES} 
				enableenableImageSelection={false}
				rowHeight={212}
				backdropClosesModal={true}
			/>
        </div>
    )
}

export default Galeria;