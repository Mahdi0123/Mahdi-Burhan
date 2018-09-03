const tog = document.getElementById("toggle");
const ul = document.querySelector("ul");

toggle.addEventListener('click', function(e) {
  // toggle class "active" on ul
  ul.classList.toggle("act");
  e.preventDefault();
}, false);
