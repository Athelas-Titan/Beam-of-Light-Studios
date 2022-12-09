var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// Get the button, and when the user clicks on it, execute displayCart
document.getElementById("cartBtn").onclick = function() {displayCart()};
document.getElementById("exitCart").onclick = function() {hideCart()};
/* displayCart toggles between adding and removing the show class, which is used to hide and show the cart */
function displayCart() {
    document.getElementById("myCart").classList.add("show");
}
function hideCart() {
    document.getElementById("myCart").classList.remove("show");
}

