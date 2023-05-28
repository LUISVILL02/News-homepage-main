const navigator = document.querySelector(".navigator");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navi = document.querySelector(".navi");
const windowWidth = window.innerWidth;
const image = document.querySelector(".im");

menu.addEventListener("click", e => {
    e.preventDefault();    
    close.style = "display: block; position: fixed; right: 20px"
    menu.style = "display: none";
    navi.style = "box-shadow: -200px 0 0 0 rgba(0, 0, 0, 0.406);transform: translateX(0); position: fixed"
})

close.addEventListener("click", e =>{
    e.preventDefault();
    navi.style = "transform: translateX(200%)"
    close.style = "display: none"
    menu.style = "diplay: block"
})

if(windowWidth === 375) image.src = "images/image-web-3-mobile.jpg";
