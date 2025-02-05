

const lookupHandler = (value) => {
    const images = document.querySelectorAll(".image-box")
    images.forEach((img) =>{
        const title = img.querySelector("h4").innerText;

        if(title.toLowerCase().includes(value.toLowerCase())){
            img.classList.remove("hidden");
        }else {
            img.classList.add("hidden");

        }
    })

}
   

export default lookupHandler


/* 
if(title.toLowerCase().includes(value.toLowerCase())){
    img.classList.remove("hidden");
}else {
    img.classList.add("hidden");
}*/


