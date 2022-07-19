import React, {Component} from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

const img = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const array = [];


class Zooming extends Component {

    // returnImage(){
    //     for(let i=0; i<3; i++){
    //         array.push(<div><img className="Image" src={"../Images/img${i+1}.jpg"} alt="Zoom_Image"/></div>);
    //     }
    //     return array;
    // }
    // document.addEventListener("wheel", function (e) {
    //     if (e.deltaY > 0) {
    //       zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    //     } else {
    //       zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    //     }
    //   });

    render(){
        const name = 'ZoomImage';
        return(
            <div className="Zoomdiv">
                <Zoom><img className="Image" src={require("../Images/img1.jpg")} alt="Zoom_Image"/></Zoom>
                <Zoom><img className="Image" src={require("../Images/img2.jpg")} alt="Zoom_Image"/></Zoom>
                <Zoom><img className="Image" src={require("../Images/img3.jpg")} alt="Zoom_Image"/></Zoom>
            </div>
        );
    }
}

  

  export default Zooming;
