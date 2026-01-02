const gallery = document.querySelector("#gallery");
const galleryItem = gallery.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const btnClose = document.getElementById("btn-close");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

function openLightBox(params) {
  const galleryImgSrc = params.querySelector("img").getAttribute("src");
  const lightboxImgSrc = document.querySelector("#lightbox-img");
  lightboxImgSrc.setAttribute("src", galleryImgSrc);
  lightbox.style.display = "flex";
}

function leftRight(params) {
  arrowLeft.style.display = "initial";
  arrowRight.style.display = "initial";
  if (params === 0) {
    arrowLeft.style.display = "none";
  } else if (galleryItem.length - 1 === params) {
    arrowRight.style.display = "none";
  }

  arrowLeft.addEventListener("click", () => {
    params--;
    if (params === 0){
      arrowLeft.style.display = "none";
      openLightBox(galleryItem[params])
      return
    } else{
      openLightBox(galleryItem[params])
      arrowRight.style.display = "initial";
    }
  });

  arrowRight.addEventListener("click", () => {
    params ++
       if (params === galleryItem.length - 1){
      arrowRight.style.display = "none";
      openLightBox(galleryItem[params])
      return
    } else{
      openLightBox(galleryItem[params])
      arrowLeft.style.display = "initial";
    }
  });
}

galleryItem.forEach((element, index) => {
  element.addEventListener("click", () => {
    openLightBox(element);
    leftRight(index);
  });
});



btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
