import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Link from 'next/link';
import TravelMapPolyline from './TravelMapPolyline';
import VisitedCountries from '../data/Countries';


function TravelMap() {

	const [mapPlaces, setMapPlaces] = useState([])

	useEffect(() => {
		const fetchArticles = async() => {
			const response = await fetch('/api/marker')
			const data = await response.json()
			setMapPlaces(data)
			return data;
		}
		
		fetchArticles()
	}, []);


	return (
		<LoadScript
			googleMapsApiKey={'AIzaSyAkQNbFsOfXqMMsvauVDWF13uSjuJpeSP4'}
		>
			<GoogleMap
				mapContainerClassName={'map-wrapper'}
				center={{lat: 50.077,lng: -30 }}
				zoom={2}
				options={{ mapId: '367468d05f321119', streetViewControl: false, mapTypeControl: false}}
			>
			{ mapPlaces.map( (marker,idx) => {
				if('lat' in marker && 'lng' in marker){
					return(
						<Marker
							clickable={true}
							position={marker}
							onClick = { () => {
								mapPlaces.map( (marker)=> {marker.isOpen = false})
								marker.isOpen = !marker.isOpen
								setMapPlaces([...mapPlaces])
							}}
							icon={marker.url ? 'icons/MarkerBlue.png' : 'icons/MarkerRed.png'}
							key={idx}
						>	
						{
							marker.isOpen &&
							<InfoWindow 
								position={marker}
								onCloseClick = { () => {
									marker.isOpen = false
									setMapPlaces([...mapPlaces])
								}}
							>
								<div>
									<img className='marker-img' alt={marker.title} src={marker.image}/>
									<p className='marker-text'>
										{
											marker.url 
											?
												<Link href={'/blog'+marker.url} passHref>{marker.title}</Link>
											:
												marker.title
										}
									</p>
								</div>
							</InfoWindow>
						}
						</Marker>
					)
				}
			})}
			{
				VisitedCountries.map(country =>{
					return(
						<TravelMapPolyline 
							key={country.name}
							name={country.name}
							paths={country.points}
						/>
					)
				})
			}
			</GoogleMap>
		</LoadScript>
			
	)
}

export default TravelMap