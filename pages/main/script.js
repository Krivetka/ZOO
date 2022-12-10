const toggle = document.querySelector("#toggle-button");
const body = document.querySelector("body");
const slider = document.querySelector(".gallery-content");
let activeBtn = document.querySelector(".gallery-content .active");
const pagesSection = document.querySelector("section .pages input");
const pagesText = document.querySelector("section .pages span");
const ellipse = document.querySelector("#hide-ellipse");

toggle.addEventListener("click", ()=>{
   body.classList.toggle("dark");
});

function firstGallery (elem){
   if (elem.className === "card"){
      pagesSection.value = elem.id;
      pagesText.innerHTML = `0${pagesSection.value}/`;
      activeBtn.classList.remove("active");
      activeBtn.classList.add("card");
      elem.classList.add("active");
      elem.classList.remove("card");
      activeBtn = elem;
      if(elem === slider.firstChild.nextSibling) ellipse.style.opacity = "1";
      else ellipse.style.opacity = "0";
      if (body.offsetWidth > 1902) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-2)*(-140)+(elem.id-3)*(-46)-23}px`;
      else if (body.offsetWidth >= 640 && body.offsetWidth < 1902) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-2)*(-180)+(elem.id-3)*(-45)-7}px`;
      else if (body.offsetWidth >= 320 && body.offsetWidth < 640) slider.firstChild.nextSibling.style.marginLeft = `${(elem.id-2)*(-113)+(elem.id-3)*(-18)-9}px`;
   }
}
slider.addEventListener("click", elem => firstGallery(elem.target));
pagesSection.addEventListener("input", () => firstGallery(slider.children[pagesSection.value-1]));

const slider2 = document.querySelector(".photo");
const pagesSection2 = document.querySelector(".pets .pages input");
const pagesText2 = document.querySelector(".pets .pages span");
const nextBtn = document.querySelector(".fa-chevron-right");
const prevBtn = document.querySelector(".fa-chevron-left");
let activeBtn2 = document.querySelector(".pets .active");
let prevValue = 11;
let min = 11;

function secondGallery (elem){
    if (elem.className === "card"){
        pagesSection2.value = elem.id-10;
        pagesText2.innerHTML = `0${pagesSection2.value}/`;
        activeBtn2.classList.remove("active");
        elem.classList.add("active");
        activeBtn2 = elem;
        if(prevValue == 18 && elem.id == 11) min = 12;
        if(prevValue == 11 && elem.id == 18) min = 14;
        if (body.offsetWidth > 1902) {
            if(elem.id > (min+3) && elem.id > prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-14)*(-277)+(elem.id-15)*(-30)-30}px`;
                min++;
            }
            if(elem.id < min && elem.id < prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-11)*(-277)+(elem.id-12)*(-30)-30}px`;
                min--;
            }
            prevValue = elem.id;
        }
        else if (body.offsetWidth >= 1200 && body.offsetWidth < 1902) {
            if(elem.id > (min+3) && elem.id > prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-14)*(-210)+(elem.id-15)*(-20)-20}px`;
                min++;
            }
            if(elem.id < min && elem.id < prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-11)*(-210)+(elem.id-12)*(-20)-20}px`;
                min--;
            }
            prevValue = elem.id;
        }
        else if (body.offsetWidth >= 640 && body.offsetWidth < 1200) {
            if(elem.id > (min+1) && elem.id > prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-12)*(-210)+(elem.id-17)*(-20)-20}px`;
                min++;
            }
            if(elem.id < min && elem.id < prevValue) {
                slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-11)*(-210)+(elem.id-16)*(-20)-20}px`;
                min--;
            }
            prevValue = elem.id;
        }
        else if (body.offsetWidth >= 300 && body.offsetWidth < 640) {
            slider2.firstChild.nextSibling.style.marginLeft = `${(elem.id-11)*(-210)+(elem.id-15)*(-16)-16}px`;
        }
    }
}

slider2.addEventListener("click", elem => secondGallery(elem.target));
pagesSection2.addEventListener("input", () => secondGallery(slider2.children[pagesSection2.value-1]));
nextBtn.addEventListener("click", () => {
    if(pagesSection2.value == 8) secondGallery(slider2.firstElementChild);
    else secondGallery(slider2.children[pagesSection2.value]);
});
prevBtn.addEventListener("click", () => {
    if(pagesSection2.value == 1) secondGallery(slider2.lastElementChild);
    else secondGallery(slider2.children[pagesSection2.value-2]);
});

const slider3 = document.querySelector(".gallery-3");
const pagesSection3 = document.querySelector(".how-works .pages input");
const pagesText3 = document.querySelector(".how-works .pages span");

function thirdGallery (value){
    pagesText3.innerHTML = `0${value}/`;
    if (body.offsetWidth > 1902) slider3.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-790)}px`;
    else if (body.offsetWidth >= 1200 && body.offsetWidth < 1902) slider3.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-746)}px`;
    else if (body.offsetWidth >= 640 && body.offsetWidth < 1200) slider3.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-600)}px`;
    else if (body.offsetWidth >= 300 && body.offsetWidth < 640) slider3.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-300)}px`;
}
pagesSection3.addEventListener("input", () => thirdGallery(pagesSection3.value));

const slider4 = document.querySelector(".reviews");
const pagesSection4 = document.querySelector(".testimonials .pages input");
const pagesText4 = document.querySelector(".testimonials .pages span");

function fourthGallery (value){
    pagesText4.innerHTML = `0${value}/`;
    if (body.offsetWidth > 1902) slider4.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-585)+(value-2)*(-30) -15}px`;
    else if (body.offsetWidth >= 1200 && body.offsetWidth < 1902) slider4.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-440)+(value-2)*(-20) -15}px`;
    else if (body.offsetWidth >= 640 && body.offsetWidth < 1200) slider4.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-585)+(value-2)*(-20) -10}px`;
    else if (body.offsetWidth >= 300 && body.offsetWidth < 640) slider4.firstChild.nextSibling.style.marginLeft = `${(value-1)*(-300)+(value-2)*(-10) -10}px`;
}
pagesSection4.addEventListener("input", () => fourthGallery(pagesSection4.value));