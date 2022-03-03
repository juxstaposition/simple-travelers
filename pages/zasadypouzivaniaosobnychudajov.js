import Link from 'next/link';
import Head from 'next/head';

function GDPRBlog () {
    return(
        <div className="page screen-reader-text">
			<Head>
                <title>Simple Travelers | GDPR</title>
				<meta property="og:title"       content="Simple Travelers | GDPR" />
				<meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
                <meta name="description"        content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
				<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
				<meta property="og:url" 		content="http://simpletravelers.sk/zasadypouzivaniaosobnychudajov" />
                <link rel="canonical" href="http://simpletravelers.sk/" />
                <meta name="keywords" content="" />
			</Head>
            <h2>
                Zásady používania osobných údajov
            </h2>
            <p>
                Ak ste návštevníkom nášho blogu, poskytujete nám svoje osobné údaje. My vaše údaje spracovávame a za ich bezpečnosť ručíme. Sľubujeme, že vaše údaje dostatočne chránime a podriaďujeme sa požiadavkám Nariadení o ochrane osobných údajov (GDPR).
            </p>
            <h3>
                Použitie osobných údajov
            </h3>
            <p>
                Aby sme mohli merať ako sa vám na našom blogu páči, kde trávite najviac času a kam klikáte, používame poskytovateľa služieb pre spracovateľský nástroj, ktorým je:
            </p>
            <p> 
                Google – Google Analyzics, využívajúci merací kód.
            </p>
            <p>
                Tento nástroj je použitý v prípade, že vyjadríte súhlas so&nbsp;
                <Link href={'/zasadypouzivaniaosobnychudajov' }>
                Zásady používania osobných údajov
                </Link>, na blogu&nbsp;
                <Link href={'/' }>
                    simpletravelers.sk
                </Link>. 
                Po potvrdení nástroj vygeneruje pomocné cookies súbory, s náhodným číslom, ktoré sú asociované s používateľovým prehliadačom. Týmto spôsobom je zaručená anonymizácia osobných údajov, ktoré používame pre zbieranie štatistík o prehliadaní nášho blogu.
            </p>
            <h3>
                Aké údaje spracovávame a prečo
            </h3>
            <p>
                Vaše osobné údaje spracovávame z dôvodu zlepšenia poskytovania obsahu nášho blogu a jeho kvality. 
            </p>
            <p>
                <b>Zbieranie osobných údajov môže znieť hrozivo, avšak jedná sa len o údaje prehliadania našich stránok vo forme cookies súborov.</b>
            </p>
            <p>
                Zoznam údajov, ktoré spracovávame po dobu trvania vášho súhlasu, maximálne však 26 mesiacov od jeho udelenia: 
            </p>
            <p>
                COOKIES: Súbory cookies pre nástroj Google Analytics.
            </p>
            <h3>
                Správca osobných údajov
            </h3>
            <p>
                Daniel Miloslav Očenáš <br />
                +421 915 358 175 <br />
                Terézie Vansovej 18 <br />
                97401, Banská Bystrica <br />
                danielm.ocenas@gmail.com
            </p>
            <p>
                Správca prevádzkuje webové stránky lindatraveler.sk. Správca vaše údaje spravuje a určuje, ako dlho budú osobné údaje spracovávané a za akým účelom. Správca taktiež vyberá ďalších spracovateľov, ktorých k spracovaniu využíva.
            </p>
            <h3>
                Predávanie vašich dát mimo Európsku Úniu
            </h3>
            <p>
                Vaše dáta spracovávame výhradne v Európskej Únii alebo v štátoch, ktoré zaisťujú rovnakú úroveň ochrany na základe rozhodnutia Európskej komisie.
            </p>
            <h3>
                Vaše práva v súvislosti s ochranou osobných údajov
            </h3>
            <p>
                V súvislosti s ochranou osobných údajov máte radu práv. Ak budete chcieť využiť niektoré z týchto práv, prosím kontaktujte nás prostredníctvom e-mailu: 
            </p>
            <p>
                Máte právo na informácie, ktoré si práve čítate.
            </p>
            <p>
                Právu na prístup – môžete náš požiadať o informáciu o tom, aké údaje o vás spracovávame a prečo. Následne do 30 dní vám túto informáciu doložíme.
            </p>
            <p>
                Právo na obmedzenie spracovania – môžete využiť, ak se domnievate, že spracovávame vaše nepresné údaje, domnievate sa, že vykonávame spracovanie nezákonne, ale nechcete všetky údaje zmazať alebo ak máte námietku proti spracovávaniu. Obmedziť môžete rozsah osobných údajov alebo účelov spracovania.
            </p>
            <p>
                Právo na vymazanie: Vašim ďalším právom je právo požiadať nás o vymazanie údajov, ktoré o vás uchovávame. V takom prípade vymažeme všetky vaše osobné údaje, ktoré o vás uchovávame. Na vykonanie tohto práva potrebujeme 30 dní.
            </p>
            <h3>
                Mlčanlivosť
            </h3>
            <p>
                Sme povinní zachovávať mlčanlivosť o osobných údajoch, ktorých zverejnenie by ohrozilo zabezpečenie vašich osobných údajov. Táto mlčanlivosť pritom trvá aj po skončení záväzkových vzťahov s nami. Bez vášho súhlasu vaše údaje žiadnej inej tretej strane nevydáme.
            </p>
            <p>
                Dátum: 19.04.2020
            </p>
        </div>
    )
}


export default GDPRBlog;

