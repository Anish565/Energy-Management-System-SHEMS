import DOMPurify from "dompurify";
import dompurify from "dompurify"


export function cleanData(input){
    console.log(input);
    return DOMPurify.sanitize(input);
}
