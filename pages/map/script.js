const toggle = document.querySelector("#toggle-button");
const body = document.querySelector("body");

toggle.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

const slider = document.querySelector(".photos");
let activeBtn = document.querySelector(".photos .active-photo");
const pagesSection = document.querySelector(".map .pages input");
const pagesText = document.querySelector(".map .pages span");
const nextBtn = document.querySelector(".fa-chevron-right");
const prevBtn = document.querySelector(".fa-chevron-left");
const panda = document.querySelector("#placeholder1");
const gorilla = document.querySelector("#placeholder4");
const alligator = document.querySelector("#placeholder3");
const eagle = document.querySelector("#placeholder2");
const buttonWatch  = document.querySelector(".map .button-watch a");
let prevValue = 2;

function firstGallery (elem){
    gorilla.style.background = "url(\"../../assets/images/placeholder4.png\")";
    panda.style.background = "url(\"../../assets/images/placeholder1.png\")";
    alligator.style.background = "url(\"../../assets/images/placeholder3.png\")";
    eagle.style.background = "url(\"../../assets/images/placeholder2.png\")";
    buttonWatch.href = "";
    if (elem.className === "animalPhoto") elem = elem.parentElement;
    if (elem.classList[0] === "photo"){
        pagesSection.value = elem.id;
        pagesText.innerHTML = `0${pagesSection.value}/`;
        activeBtn.classList.remove("active-photo");
        elem.classList.add("active-photo");
        activeBtn = elem;
        if (elem.id == 1) {
            gorilla.style.background = "url(\"../../assets/images/placeholder14.png\")";
            buttonWatch.href = "../zoos/gorilla.html";
        }
        if (elem.id == 2) {
            panda.style.background = "url(\"../../assets/images/placeholder11.png\")";
            buttonWatch.href = "../zoos/panda.html"
        }
        if (elem.id == 3) {
            alligator.style.background = "url(\"../../assets/images/placeholder13.png\")";
            buttonWatch.href = "../zoos/alligator.html"
        }
        if (elem.id == 4) {
            eagle.style.background = "url(\"../../assets/images/placeholder12.png\")";
            buttonWatch.href = "../zoos/eagle.html"
        }
        if (body.offsetWidth >= 1200 && body.offsetWidth < 1902) {
            if (elem.id > 5 && prevValue < elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-5)*(-124)+(elem.id-6)*(-18)}px`;
            if (elem.id < 5 && prevValue > elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-1)*(-114)+(elem.id-2)*(-18)}px`;
        }
        if (body.offsetWidth >= 640 && body.offsetWidth < 1200) {
            if (elem.id > 4 && prevValue < elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-4)*(-124)}px`;
            if (elem.id < 5 && prevValue > elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-1)*(-114)}px`;
        }
        if (body.offsetWidth >= 320 && body.offsetWidth < 640) {
            if (elem.id > 3 && prevValue < elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-3)*(-66)}px`;
            if (elem.id < 6 && prevValue > elem.id) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-1)*(-66)}px`;
        }
        prevValue = elem.id;
    }
}
firstGallery(slider.children[1]);
slider.addEventListener("click", elem => firstGallery(elem.target));
pagesSection.addEventListener("input", () => firstGallery(slider.children[pagesSection.value-1]));
nextBtn.addEventListener("click", () => {
    if(pagesSection.value == 8) firstGallery(slider.firstElementChild);
    else firstGallery(slider.children[pagesSection.value]);
});
prevBtn.addEventListener("click", () => {
    if(pagesSection.value == 1) firstGallery(slider.lastElementChild);
    else firstGallery(slider.children[pagesSection.value-2]);
});
panda.addEventListener("click", () => firstGallery(slider.children[1]));
gorilla.addEventListener("click", () => firstGallery(slider.children[0]));
alligator.addEventListener("click", () => firstGallery(slider.children[2]));
eagle.addEventListener("click", () => firstGallery(slider.children[3]));