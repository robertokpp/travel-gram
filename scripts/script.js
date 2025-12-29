const gallery = document.querySelector("#gallery")
const lightbox = document.querySelector(".lightbox")
const lightboxContent = document.querySelector(".lightbox-content")
const galleryImg = gallery.querySelectorAll("img")


galleryImg.forEach(element => {
  element.addEventListener("click", () =>{
    const srcImg = element
    console.log(srcImg)
    lightboxContent.append(srcImg)
    lightbox.style.display = "flex"
  })
});

