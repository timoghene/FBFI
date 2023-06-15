const timoButton = document.getElementsByClassName('timo-button')[0];
const navlinksTimo = document.getElementsByClassName('navlinks-timo')[0];

timoButton.addEventListener('click', () => {
    navlinksTimo.classList.toggle('active')
})



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }