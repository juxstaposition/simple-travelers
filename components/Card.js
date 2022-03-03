import React, { useState} from 'react';
import Link from 'next/link';
import LoaderIcon from './LoaderIcon';

function CardHeader (props) {
	const [cardHeaderState] = useState(props);

	return (
		<img 
			className='card-header-img'
			src={cardHeaderState.image}
			alt={cardHeaderState.title}
		/>
	)
}


function CardBody (props) {
	const [cardBodyState] = useState(props);
	return (
		<div className="card-body" >
			<p className="date">{cardBodyState.date}</p>
			<h3 className="card-title">{cardBodyState.title}</h3>
			<p className="card-category-row">
				{cardBodyState.category && cardBodyState.category.map(category=>{
					return(<span key={cardBodyState.title + category} >{category}</span> )
				})}
			</p>
			
			{/* <p className="subtitle">{cardBodyState.subtitle}</p> */}
			<p className="bodyContent">{cardBodyState.text} </p>
		</div>
	)
}

function Card (props) {
	const [cardState] = useState(props);
	
    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = () => {
		setIsLoading(true);
	}
	
	return (
		isLoading 
		?
		 <LoaderIcon /> 
		:
		<Link className="articleLink" href={cardState.url} key={cardState.url} passHref>
			<article className="card" onClick={toggleLoading} >
				<CardHeader
					{...cardState}
				/>
				<CardBody 
					{...cardState}
				/>
			</article>
		</Link>
	)
}
  
export default Card;
