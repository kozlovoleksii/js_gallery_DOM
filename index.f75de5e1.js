"use strict";
const imagesList = document.querySelector("ul");
const largeImg = document.querySelector(".gallery__large-img");
imagesList.addEventListener("click", (e)=>{
    e.preventDefault();
    largeImg.src = e.target.closest(".list-item__link").href;
});

//# sourceMappingURL=index.f75de5e1.js.map
