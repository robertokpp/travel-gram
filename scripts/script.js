const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const btnClose = document.getElementById("btn-close");
const amountImg = document.getElementById("amount-img");

//metodo antigo do lightbox
const galleryImg = gallery.querySelectorAll("img");
galleryImg.forEach((element) => {
  amountImg.textContent = `${galleryImg.length} Fotos`;

  element.addEventListener("click", () => {
    const srcImg = element.getAttribute("src");
    const lightboxImg = lightboxContent.querySelector("img");
    lightboxImg.setAttribute("src", srcImg);
    lightbox.style.display = "flex";
  });
});


const galleryItem = gallery.querySelectorAll(".gallery-item");
galleryItem.forEach((element) => {
  
  element.addEventListener("click", () => {
    const galleryLightbox = element.querySelector(".gallery-lightbox")
    console.log(galleryLightbox)
  });


});

btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
