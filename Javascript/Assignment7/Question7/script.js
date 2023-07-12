// Get form elements
const titleInput = document.getElementById("title");
const imageUrlInput = document.getElementById("image-url");
const nameInput = document.getElementById("name");
const categoryInput = document.getElementById("category");
const messageInput = document.getElementById("message");

// Get preview elements
const imagePreview = document.querySelector(".imagePreview");
const titlePreview = document.getElementById("titlePreview");
const namePreview = document.getElementById("namePreview");
const storyPreview = document.getElementById("storyPreview");

// Add event listeners to form inputs
titleInput.addEventListener("input", updatePreview);
imageUrlInput.addEventListener("input", updatePreview);
nameInput.addEventListener("input", updatePreview);
categoryInput.addEventListener("input", updatePreview);
messageInput.addEventListener("input", updatePreview);

// Function to update the live preview
function updatePreview() {
  const title = titleInput.value;
  const imageUrl = imageUrlInput.value;
  const name = nameInput.value;
  const category = categoryInput.value;
  const story = messageInput.value;

  imagePreview.src = imageUrl;
  titlePreview.textContent = title;
  storyPreview.innerHTML = `<strong>Category: ${category}</strong><br>${story}`;
  namePreview.textContent = `Written By: ${name}`;
}
