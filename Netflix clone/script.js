let plus =Array.from(document.getElementsByClassName("plus"))
let lastClick = null;
plus.forEach(element => {
    element.addEventListener("click" , ()=>{
        let src = element.src;
        if (src.endsWith("plus-lg.svg")) {
            element.src = "x-lg.svg"
            if (lastClick != null) {
                lastClick.parentElement.nextElementSibling.style.height = "0px";
                lastClick.src = "plus-lg.svg"
            }
            element.parentElement.nextElementSibling.style.height = `${element.parentElement.nextElementSibling.scrollHeight}px`
            lastClick = element;
        }
        else{
            element.src = "plus-lg.svg"
            element.parentElement.nextElementSibling.style.height = "0px";
            lastClick = null;
        }
    })
});
