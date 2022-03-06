
import { Polygon } from '@react-google-maps/api';

export default function TravelMapPolyline(props) {
    const showTitle = () => {
        console.log(props)
    }
    const options = {
        strokeColor: '#dc7b1c',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#dc7b1c',
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
        paths: props.paths,
        zIndex: 1
    };
    return(
        <Polygon
            onClick={showTitle}
            options={options}
        />
    )
}