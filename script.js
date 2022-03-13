const openFace = document.querySelector(".open");
const closedFace = document.querySelector(".closed");
const openFace1 = document.querySelector(".open1");
const closedFace1 = document.querySelector(".closed1");
const openFace2 = document.querySelector(".open2");
const closedFace2 = document.querySelector(".closed2");



closedFace.addEventListener("click", function(){
        closedFace.classList.remove("active");
        openFace.classList.add("actoveopen");
});

openFace.addEventListener("click", function(){
    openFace.classList.remove("actoveopen");
    closedFace.classList.add("active");
});

closedFace1.addEventListener("click", function(){
    closedFace1.classList.remove("active");
    openFace1.classList.add("actoveopen");
});

openFace1.addEventListener("click", function(){
openFace1.classList.remove("actoveopen");
closedFace1.classList.add("active");
});

closedFace2.addEventListener("click", function(){
    closedFace2.classList.remove("active");
    openFace2.classList.add("actoveopen");
});

openFace2.addEventListener("click", function(){
openFace2.classList.remove("actoveopen");
closedFace2.classList.add("active");
});