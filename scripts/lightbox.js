const gallery = document.querySelector("#gallery");
const galleryItem = gallery.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const btnClose = document.getElementById("btn-close");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const amountImg = document.querySelector("#amount-img")

function openLightBox(params) {
  const galleryImgSrc = params.querySelector("img").getAttribute("src");
  const lightboxImgSrc = document.querySelector("#lightbox-img");
  lightboxImgSrc.setAttribute("src", galleryImgSrc);
  lightbox.style.display = "flex";
}

function leftRight(params) {
  arrowLeft.addEventListener("click", () => {
    arrowRight.style.cursor = "pointer";
    if (params > 0) {
      params--;
      openLightBox(galleryItem[params]);
    } else {
      arrowLeft.style.cursor = "not-allowed";
    }
  });

  arrowRight.addEventListener("click", () => {
    arrowLeft.style.cursor = "pointer";
    if (params < galleryItem.length - 1) {
      params++;
      openLightBox(galleryItem[params]);
    } else{
      arrowRight.style.cursor = "not-allowed";
    }
  });
}

galleryItem.forEach((element, index) => {
  element.addEventListener("click", () => {
    openLightBox(element);
    leftRight(index);
  });
  
});

amountImg.textContent = galleryItem.length + " Fotos"

btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

