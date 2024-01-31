// NAVBAR LINKS
const links = ["Home", "Services", "About us", "Extra SalesPage"];

const ul = document.createElement("ul");

const listContainer = document.getElementById("list");

const linkItems = links.map((linkText) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${linkText.toLowerCase().replace(/\s/g, "-")}`;
  a.textContent = linkText;
  li.appendChild(a);
  return li;
});

linkItems.forEach((item) => ul.appendChild(item));
listContainer.appendChild(ul);

// bUTTONS
function buttonClickHandler() {
  alert("You clicked the reusable button!");
}
const reusableButtons = document.querySelectorAll(".reusable-button");
reusableButtons.forEach(function (button) {
  button.addEventListener("click", buttonClickHandler);
});

//IMAGE
function imageClickHandler() {
  alert("You clicked the reusable image!");
}
const reusableImages = document.querySelectorAll(".reusable-image");
reusableImages.forEach(function (image) {
  image.addEventListener("click", imageClickHandler);
});

const users = [
  {
    name: "Jane",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aperiam voluptatem eaque rerum unde velit id. Nobis eius vero facilis!",
    imageUrl: "jane.jpg",
    stars: 5,
  },
  {
    name: "jane",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aperiam voluptatem eaque rerum unde velit id. Nobis eius vero facilis!",
    imageUrl: "jane.jpg",
    stars: 4,
  },
  {
    name: "cathrine",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aperiam voluptatem eaque rerum unde velit id. Nobis eius vero facilis!",
    imageUrl: "cathrine.jpg",
    stars: 3,
  },
];
function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("reuseable");

  const message = document.createElement("p");
  message.textContent = user.message;

  const name = document.createElement("h4");
  name.textContent = user.name;

  const image = document.createElement("img");
  image.src = user.imageUrl;
  image.alt = user.name;

  const stars = document.createElement("div");
  for (let i = 0; i < user.stars; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fa", "fa-star");
    stars.appendChild(starIcon);
  }

  card.appendChild(message);
  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(stars);

  return card;
}
function renderUserCards() {
  const container = document.getElementById("container");
  users.forEach((user) => {
    const userCard = createUserCard(user);
    container.appendChild(userCard);
  });
}
document.addEventListener("DOMContentLoaded", renderUserCards);

const contentData = [
  {
    id: "content1",
    imageUrl: "a.jpg",
    title: "Balancing Your Life",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, labore modi, adipisci dolores amet quis, saepe unde magnam debitis harum deserunt commodi nostrum expedita nihil voluptatem aliquam est et nesciunt?",
  },
  {
    id: "content2",
    imageUrl: "a.jpg",
    title: "Managing Stress",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, labore modi, adipisci dolores amet quis, saepe unde magnam debitis harum deserunt commodi nostrum expedita nihil voluptatem aliquam est et nesciunt?",
  },
  {
    id: "content3",
    imageUrl: "a.jpg",
    title: "Healthy Habits",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, labore modi, adipisci dolores amet quis, saepe unde magnam debitis harum deserunt commodi nostrum expedita nihil voluptatem aliquam est et nesciunt?",
  },
];

function createReusableContent(data) {
  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = data.imageUrl;
  img.alt = data.title;

  const h3 = document.createElement("h3");
  h3.textContent = data.title;

  const p = document.createElement("p");
  p.textContent = data.text;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function renderContent() {
  const container = document.getElementById("yourNewID");
  contentData.forEach((data) => {
    const content = createReusableContent(data);
    content.id = data.id;
    container.appendChild(content);
  });
}

document.addEventListener("DOMContentLoaded", renderContent);
