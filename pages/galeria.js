import Head from 'next/head';
import { Form, Select, Row, Col } from 'antd';

import ImageGrid from '../components/ImageGrid';
import {IMAGES, CestaSNPIMAGES} from '../data/GalleryImages';
import { useState } from 'react';

const { Option } = Select;

const galleryOptions = [
	{
		title:"Výber našich najlepších fotiek",
		option:"Výber fotiek",
		images:IMAGES
	},
	{
		title:"Cesta hrdinov SNP",
		option:"Cesta SNP",
		images:CestaSNPIMAGES
	},
]
const filterOptions = galleryOptions.map(item => {
	return(
		<Option key={item.option}>{item.option}</Option>
	)
})


function Galeria() {
	
	const [filterState, setFilterState] = useState(galleryOptions)

	const handleFilterChange = (selectionList) => {
		let displayGallery = []
		if(selectionList.length === 0){
			galleryOptions.forEach( item => {
				displayGallery.push(item)
			})
		}else{
			galleryOptions.forEach( item => {
				if(selectionList.includes(item.option)){
					displayGallery.push(item)
				}
			})
		}
		setFilterState(displayGallery)
	}


    return (
		<div className="page screen-reader-text">
			<Head>
				<title>Galéria</title>
				<meta property="og:title"       content="Simle Travelers - Galéria" />
				<meta property="og:description" content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete." />
				<meta name="description"        content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete." />
				<meta property="og:image"       content="http://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
				<meta property="og:url" 		content="http://simpletravelers.sk/galeria" />
				<link rel="canonical" href="http://simpletravelers.sk/galeria" />
				<meta name="keywords" content="" />
			</Head>
			
            <h2>Galéria</h2>
				<Form.Item label="Filtovať fotky" >
					<Select
						style={{marginLeft:'5px'}}
						mode="multiple"
						allowClear 
						onChange={handleFilterChange}
					>
						{filterOptions}
					</Select>
				</Form.Item>
			{ filterState.map((item)=>{
				return(
					<div key={item.option}>
						<h3>{item.title}</h3>
						<ImageGrid images={item.images} />
					</div>
				)
			})}
            {/* <h3>Kolekcia našich najlepších fotiek</h3>
			<ImageGrid 
				images={IMAGES}
			/>
            <h3>Cesta hrdinov SNP</h3>
			<ImageGrid 
				images={CestaSNPIMAGES}
			/> */}
        </div>
    )
}

export default Galeria;