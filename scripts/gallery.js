const gallery = document.querySelector("#gallery");
const galleryContent = gallery.querySelectorAll(".gallery-lightbox");

galleryContent.forEach((element) => {
  element.addEventListener("click", () => {
    const i = element.querySelector("i");
    let like = i.getAttribute("data-like");
    if (like === "dislike") {
      i.style.color = "#ff00009d";
      like = "like"
      i.setAttribute("data-like", like)
    } else {
      i.style.color = "#0000009d";
      like = "dislike"
      i.setAttribute("data-like", like)
    }
  });
});
