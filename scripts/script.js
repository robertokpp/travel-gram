const gallery = document.querySelectorAll("img")
gallery.forEach(element => {
  element.addEventListener("click", () =>{
    const srcImg = element.getAttribute("src")
    console.log(srcImg)
    


  })
});