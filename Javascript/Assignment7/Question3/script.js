// const form = document.getElementById("search-form");
// const usernameInput = document.getElementById("username-input");
// const avatar = document.getElementById("avatar");
// const name = document.getElementById("name");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = usernameInput.value;
//   getUser(username);
//   usernameInput.value = "";
// });

// function getUser(username) {
//   fetch(`https://api.github.com/users/${username}`)
//     .then((response) => response.json())
//     .then((data) => {
//       avatar.src = data.avatar_url;
//       name.textContent = data.name || "Name not found";
//     })
//     .catch((error) => {
//       console.error(error);
//       avatar.src = "";
//       name.textContent = "User not found";
//     });
// }

const form = document.getElementById("search-form");
const usernameInput = document.getElementById("username-input");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const portfolio = document.getElementById("portfolio");
const locationElement = document.getElementById("location");
const publicRepo = document.getElementById("public-repo");
const follower = document.getElementById("follower");
const bio = document.getElementById("bio");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  getUser(username);
  usernameInput.value = "";
});

function getUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      avatar.src = data.avatar_url;
      name.textContent = `Name: ${data.name || "Name not found"}`;
      portfolio.textContent = `Portfolio: ${
        data.html_url || "Portfolio not found"
      }`;
      locationElement.textContent = `Location: ${
        data.location || "Location not found"
      }`;
      publicRepo.textContent = `Public Repos: ${data.public_repos || 0}`;
      follower.textContent = `Follower: ${data.followers || 0}`;
      bio.textContent = `Bio: ${data.bio || "Bio not found"}`;
    })
    .catch((error) => {
      console.error(error);
      avatar.src = "";
      name.textContent = "User not found";
      portfolio.textContent = "";
      locationElement.textContent = "";
      publicRepo.textContent = "";
      follower.textContent = "";
      bio.textContent = "";
    });
}
