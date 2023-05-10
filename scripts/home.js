let element = (tag) => document.querySelector(tag);
let cart = JSON.parse(localStorage.getItem("cart")) || [];
fetch("http://localhost:3000/data")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(JSON.parse(data));
  });
let displayProducts = (items) => {
  return (element("main").innerHTML = items
    .map((item) => {
      return `
        <a href="details.html?identity=${item.name}">
        <div>
          <img
            src=${item.url}/>
          <p>${item.name}</p>
          <m><i class="fa-solid fa-dollar-sign"></i>${item.price}</m>
        </div>
      </a>
        `;
    })
    .join(""));
};
