import Head from 'next/head'
function Videos() {
    return (      
		<div className="page" >
			<Head>
				<title>Videá</title>
				<meta property="og:title"       content="Videá" />
				<meta property="og:description" content="Videá cestovateľského blogu Simple Travelers" />
				<meta name="description"        content="Videá cestovateľského blogu Simple Travelers" />
				<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
				<meta property="og:url" 		content="http://simpletravelers.sk/videa" />
				<link rel="canonical" href="http://simpletravelers.sk/videa" />
				<meta name="keywords" content="video, videos" />
			</Head>
			<h2 className="headerH2">Videá</h2>
			<iframe src='https://www.youtube.com/embed/s-9kaJvCJ9E'
				  frameBorder='0'
				  allow='autoplay; encrypted-media'
				  allowFullScreen
				  title='video'
			/>
        </div>    
    )
}
export default Videos;



