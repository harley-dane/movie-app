import dom from "../dom.js"
import lookupHandler from   "./lookupHandler.js"

const lookupEvent = () => {
    dom.input.addEventListener("keyup", () => {
        const value = dom.input.value
        lookupHandler(value)
        
    })

}


export default lookupEvent