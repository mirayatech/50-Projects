// 'https://icanhazdadjoke.com',

const jokeButton = document.querySelector("button");
const jokeElement = document.querySelector(".joke");

jokeButton.addEventListener("click", generateJoke);
generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    });
}
