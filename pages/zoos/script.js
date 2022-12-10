const toggle = document.querySelector("#toggle-button");
const body = document.querySelector("body");

toggle.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

const slider = document.querySelector(".col-video");
const mainIframe = document.querySelector(".main-iframe");

function swap(event) {
    let video = document.querySelector(`.iframe-${event.classList[1]}`);
    let tempSrc = mainIframe.src;
    mainIframe.src = video.src;
    video.src = tempSrc;
}
slider.addEventListener("click", event => swap(event.target));