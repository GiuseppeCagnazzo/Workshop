console.log("test");


// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");

let captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//selecteer de span voor het sluiten van de modal
let span = document.getElementsByClassName('close')[0];

// click event op de span
span.addEventListener("click", function() {
    modal.style.display = "none";
})
