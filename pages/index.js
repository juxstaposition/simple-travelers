import { useState, useEffect } from 'react';

import Head from 'next/head';
import Slider from '../components/Slider';
import TravelMap from '../components/TravelMap';




export default function HomePage() {

    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            const response = await fetch('/api/articles')
            const data = await response.json()
            let newArticleList = data.articleList.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).slice(0,3)
            newArticleList.forEach(article =>{
                article['class'] = "sliderContent";
                article['url'] = "/blog" + article['url'];
            })
            newArticleList = [ 
                {   
                    title: "Cestovateľský blog, ktorý nakopne tvoju chuť objavovať svet",
                    image: "/images/photosFull/ZionAngelsLanding16-9.jpg",
                    class: "sliderContentHeader",
                    url:"/blog"
                }, 
                ...newArticleList
            ]
            setArticlesList(newArticleList);
            return data;
        }

        fetchArticles()
    }, []);

    return (
        <div className='page'>
            <Head>
		        <title>Simple Travelers</title>
				<meta property="og:title"       content="Simple Travelers" />
				<meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
                <meta name="description"        content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
				<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
				<meta property="og:url" 		content="http://simpletravelers.sk/" />
                <link rel="canonical" href="http://simpletravelers.sk/" />
                <meta name="keywords" content="$OG_KEYWORDS" />
			</Head>
            <div className="slider-container" >
                <Slider slides={articlesList} />
            </div>
            <TravelMap />

            {/* <div className='page'>
                <UploadArticles />
            </div> */}
        </div>
    )
}
