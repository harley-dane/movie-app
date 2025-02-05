import data from "../data.js"
import dom from  "../dom.js"
import makeImage from "../components/makeImage.js"

const loadHandler = () => {
data.images.forEach(( image) =>{
  
    const imageBox = makeImage(image);
   
    dom.images.append(imageBox);

})

}


export default loadHandler