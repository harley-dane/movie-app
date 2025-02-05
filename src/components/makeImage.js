const makeImage = (image) => {
     /// image box

     const imageBox = document.createElement("div");
     imageBox.classList.add("image-box");
     imageBox.id = image.id;
 
     /// image
 
     const img = document.createElement("img");
     img.src = image.src;
     img.alt = image.title;
 
     /// title
     const title = document.createElement("h4");
     title.innerText = image.title;
 
     /// show the images
 
     imageBox.append(img, title);
     
     return imageBox;
}

export default makeImage