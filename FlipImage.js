const buttons = document.querySelectorAll("button");
const img = document.querySelector('.image');
const file = document.getElementById('file');
const imgContainer = document.querySelector('.image-container');
const reader = new FileReader();


file.addEventListener('change', () => {
    const selectedFile = file.files[0];
    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
    }
})

reader.addEventListener("load", () => {
    const fileContent = reader.result;
    const blob = new Blob([fileContent], { type: "image/png" });
    const url = URL.createObjectURL(blob);
    img.src = reader.result;
    imgContainer.style.display = "block";
     const a = document.createElement("a");
     imgContainer.appendChild(a);
     a.style.position = "absolute";
     a.style.bottom = "50px";
     a.style.left = "50%";
     a.style.transform = "translateX(-50%)"
    a.textContent = "cliquez ici pour télécharger"
    a.href = url;
    a.download = file.files[0].name;

})





// TRAITEMENT IMAGE
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.classList.value) {
      case "top":
        img.classList.remove("droite", "gauche","bas");
        img.classList.add("haut");
        break;
      case "bottom":
        img.classList.remove("droite", "gauche","haut");
        img.classList.add("bas");
        break;
      case "left":
        img.classList.remove("droite", "haut","bas");
        img.classList.add("gauche");
        break;
      case "right":
        img.classList.remove("haut", "gauche","bas");
        img.classList.add("droite");
        break;
      default: 
      console.log("il faut cliquer sur une flèche");
        break;
    }
  });
});
// END TRAITEMENT IMAGE