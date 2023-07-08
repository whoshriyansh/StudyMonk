// signup & signin transition
let signUpbtn = document.getElementById("signUpbtn");
let signInbtn = document.getElementById("signInbtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("tittle");

signInbtn.onclick = () => {
  nameField.style.maxHeight = "0";
  tittle.innerHTML = "Sign In";
  signUpbtn.classList.add("disable");
  signInbtn.classList.remove("disable");
};

signUpbtn.onclick = () => {
  nameField.style.maxHeight = "40px";
  tittle.innerHTML = "Sign Up";
  signUpbtn.classList.remove("disable");
  signInbtn.classList.add("disable");
};

let loginbtn = document.getElementById("loginbtn");
let closeBtn = document.getElementById("closeBtn");
let popUp = document.getElementById("popUp");

loginbtn.onclick = () => {
  event.preventDefault();
  popUp.style.display = "block";
};

closeBtn.onclick = () => {
  popUp.style.display = "none";
};

// this is teh fethching api from

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const cardsBox = document.getElementById("cardsBox");

    data.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = "images/1.jpg"; // Replace with the actual image source
      image.alt = "";

      const name = document.createElement("h2");
      name.textContent = user.name;

      const location = document.createElement("h3");
      location.textContent = user.address.city;

      const email = document.createElement("h3");
      email.textContent = user.email;

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(email);

      cardsBox.appendChild(card);
    });

    const searchInput = document.getElementById("searchInput");
    const cards = cardsBox.getElementsByClassName("card");

    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.toLowerCase();

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const name = card.querySelector("h2").textContent.toLowerCase();
        const location = card.querySelector("h3").textContent.toLowerCase();
        const email = card
          .querySelector("h3:last-of-type")
          .textContent.toLowerCase();

        if (
          name.includes(searchQuery) ||
          location.includes(searchQuery) ||
          email.includes(searchQuery)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
