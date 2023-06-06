const container = document.querySelector(".blog-container");
const blogArr = [];

const onPageLoad = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();

        console.log(data);

        for (const element of data.slice(0, 25)) {
            blogArr.push(element);
            const blogElement = createBlogElement(element.title, element.body);
            container.appendChild(blogElement);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

onPageLoad();

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const userBlogContainer = document.querySelector(".my-blog");
const hideText = document.querySelector(".hide");
const deleteButton = document.querySelector(".btn");

const addData = (event) => {
    event.preventDefault();

    if (!titleInput.value || !textInput.value) {
        alert("Please fill in all the required fields.");
        return;
    }

    hideText.classList.add("hidden");
    deleteButton.classList.remove("hidden");

    const title = titleInput.value;
    const text = textInput.value;

    const blogElement = createBlogElement(title, text);
    userBlogContainer.insertBefore(blogElement, userBlogContainer.firstChild);

    titleInput.value = "";
    textInput.value = "";
};

deleteButton.addEventListener("click", () => {
    userBlogContainer.innerHTML = "";
    hideText.classList.remove("hidden");
    deleteButton.classList.add("hidden");
});

const createBlogElement = (title, text) => {
    const blogElement = document.createElement("div");
    blogElement.classList.add("w-[250px]", "min-h-[250px]", "flex", "flex-col", "justify-between", "items-center", "bg-[#ffffff]", "p-4", "rounded-md", "drop-shadow-md");
    blogElement.innerHTML = `
    <h2 class="text-[#fca311] font-serif text-xl text-center">${title}</h2>
    <p class="text-center text-[#14213d]">${text}</p>
  `;

    return blogElement;
};
