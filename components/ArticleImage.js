import Image from 'next/image'


function ArticleImage(props) {
    let imageWidth = 300
    if(!isNaN(props.width )){
        imageWidth = props.width
    }
    if (props.src.length > 1){
        imageWidth = imageWidth/2-10
    }

    if(Array.isArray(props.src)  ) {
        return (
            // <div className={ props.src.length === 1 ? props.class : 'twoPicInRowPortrait'}>
            <>
                {props.src.map((image,idx) => {
                    return(
                        <div 
                            key={image.name + idx}
                            style={props.src.length === 1 
                            ? 
                                { position: 'relative', width: imageWidth, height: imageWidth/3*2, marginBottom: '10px' }
                            :
                                 { position: 'relative', width: imageWidth, height: imageWidth/4*5, display:'inline-block', marginBottom: '10px'}
                            }
                        >
                            <Image
                                alt={image.name} 
                                src={image.src.substring(2)} 
                                layout="fill" 
                                objectFit={props.src.length === 1 && 'contain'}
                                priority={props.idx < 4 ? true : false}
                            />
                        </div>
                        
                        // <img
                        //     key={image.name + idx}
                        //     alt={image.name} 
                        //     src={image.src}
                        //     loading="lazy" 
                        // />
                    )
                })} 
            </>
        )
    }
    else{
        return(
            null
        )
    }
}

export default ArticleImage;