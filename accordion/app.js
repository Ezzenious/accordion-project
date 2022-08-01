const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  // Do not use arrow notation when using 'this' keyword
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}
