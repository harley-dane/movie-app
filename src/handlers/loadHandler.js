import data from "../data.js"
import dom from  "../dom.js"

const loadHandler = () => {
data.images.forEach(( image) =>{
    console.log(image)

    /// image box

    const imageBox = document.createElement("div");
    imageBox.classList.add("image-box");
    imageBox.id = image.id;

    /// image

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.title;

    /// title
    const title = document.createElement("h6");
    title.innerHTML = image.title;

    /// show the images

    imageBox.append(img, title);
    dom.images.append(imageBox);

})

}


export default loadHandler