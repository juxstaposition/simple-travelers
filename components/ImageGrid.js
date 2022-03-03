import React, { useState} from 'react';


function ImageGrid(props){
    
	const [imagesState] = useState(props.images);
    console.log(imagesState)

    return(
        <div className="image-grid">
        {
            imagesState.map(image => {
                <img 
                    className="image-grid-item"
                    alt={image.src} 
                    src={image.src} 
                /> 
            })
        }
        </div>
    )
}

export default ImageGrid;