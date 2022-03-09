import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'


function ImageGrid(props){
    
	const [imagesState,setImagesState] = useState([]);
    const [galleryWidth, setGalleryWidth] = useState(0);
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)
    const [imageToShow, setImageToShow] = useState('')

    const refGallery = useRef(null)

    const updateGalleryWidth = () => {
        if (refGallery.current && refGallery.current.clientWidth) {
            const width = refGallery.current.clientWidth - 1;
            setGalleryWidth(width);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateGalleryWidth);
        updateGalleryWidth()
        return () => {  window.removeEventListener("resize", updateGalleryWidth); };
    }, []);

    useEffect(() =>{
        setImagesState(renderThumbs(galleryWidth,props.images))
    },[galleryWidth])

    const setThumbScale = (item) => {
        item.scaleWidth =
            Math.floor(props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight));
    }

    const calculateCutOff = (len, delta, items) => {
        var cutoff = [];
        var cutsum = 0;
        for(var i in items) {
            var item = items[i];
            var fractOfLen = item.scaleWidth / len;
            cutoff[i] = Math.floor(fractOfLen * delta);
            cutsum += cutoff[i];
        }

        var stillToCutOff = delta - cutsum;
        while(stillToCutOff > 0) {
            for(i in cutoff) {
                cutoff[i]++;
                stillToCutOff--;
                if (stillToCutOff < 0) 
                    break;
            }
        }
        return cutoff;
    }

    const buildImageRow = (items, containerWidth) => {
        var row = [];
        var len = 0;
        var imgMargin = 2 * props.margin;
        while(items.length > 0 && len < containerWidth) {
            var item = items.shift();
            row.push(item);
            len += (item.scaleWidth + imgMargin);
        }

        var delta = len - containerWidth;
        if(row.length > 0 && delta > 0) {
            var cutoff = calculateCutOff(len, delta, row);
            for(var i in row) {
                var pixelsToRemove = cutoff[i];
                item = row[i];
                item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                item.vwidth = item.scaleWidth - pixelsToRemove;
            }
        }
        else {
            for(var j in row) {
                item = row[j];
                item.marginLeft = 0;
                item.vwidth = item.scaleWidth;
            }
        }
        return row;
    }


    const renderThumbs = (containerWidth, images) => {
        if (!images) return [];
        if (containerWidth == 0) return [];

        var items = images.slice();
        for (var t in items) {
            setThumbScale(items[t]);
        }

        var thumbs = [];
        var rows = [];
        while(items.length > 0) {
            rows.push(buildImageRow(items, containerWidth));
        }

        for(var r in rows) {
            for(var i in rows[r]) {
                var item = rows[r][i];
                thumbs.push(item);
            }
        }
        return thumbs;
    }


    const imageThumnails = imagesState.map((item,idx) => {
        return (
            <div
                key={idx+item.src}
                style={{
                    display:'initial',
                    margin:props.margin,
                    cursor:'pointer',
                    position: "relative",
                    padding: "0px"
                }}
                onClick={() => showImage(item)}
            >
                <Image
                    src={item.thumbnail}
                    item={item}
                    index={idx}
                    width={item.vwidth}
                    height={props.rowHeight}
                />
            </div>
        )   
    });

    const showImage = (image) => {
        //set imageToShow to be the one that's been clicked on    
        setImageToShow(image);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };
    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }
    const handleNext = (e) => {
        e.stopPropagation()
        let currentIndex = imagesState.indexOf(imageToShow)
        let nextImage = imagesState[currentIndex + 1]
        setImageToShow(nextImage)
    }
    const handlePrev = (e) => {
        e.stopPropagation()
        let currentIndex = imagesState.indexOf(imageToShow)
        let nextImage = imagesState[currentIndex - 1]
        setImageToShow(nextImage)
    }


    return(
        <div
            style={{ width:'100%' }} 
            ref={refGallery}
        >
            {imageThumnails}
            { lightboxDisplay &&
            <>
                <div className="lightbox"  onClick={hideLightBox}>
                    <img className="lightbox-img" src={imageToShow.src}  />
                    <button className="lightboxButtonRight" onClick={handleNext}><i className="arrow right"></i></button>
                    <button className="lightboxButtonLeft" onClick={handlePrev}><i className="arrow left"></i></button>
                </div>
            </>
            }
        </div>
    )
}

ImageGrid.defaultProps = {
    id: "ImageGridGallery",
    rowHeight: 212,
    margin: 2,
    enableLightbox: true,
    backdropClosesModal: false,
    currentImage: 0,
    preloadNextImage: true,
    isOpen: false,
    showCloseButton: true,
    showImageCount: true,
    lightboxWidth: 1024,
    showLightboxThumbnails: false,
    lightBoxProps : {},
};


export default ImageGrid;