const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const galleryImg = gallery.querySelectorAll("img");
const btnClose = document.getElementById("btn-close");
const amountImg = document.getElementById("amount-img");


galleryImg.forEach((element) => {
  amountImg.textContent = `${galleryImg.length} Fotos`


  element.addEventListener("click", () => {
    const srcImg = element.getAttribute("src");
    const lightboxImg = lightboxContent.querySelector("img");
    lightboxImg.setAttribute("src", srcImg);
    lightbox.style.display = "flex";
  });
});


btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
