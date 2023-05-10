let element = (tag) => document.querySelector(tag);
let id = (id) => document.getElementById(id);
let cart = JSON.parse(localStorage.getItem("data")) || [];
fetch("http://localhost:3000/data")
  .then((response) => response.json())
  .then((data) => {
    displayMainProduct(JSON.parse(data));
  });
let nam = new URLSearchParams(window.location.search).get("identity");
let displayMainProduct = (items) => {
  return (element("section").innerHTML = items
    .map((item) => {
      if (item.name === nam) {
        addToCart(item);
        fetch(`http://localhost:3000/relatedData?identity=${item.type}`)
          .then((response) => response.json())
          .then((data) => {
            showSimilarItems(JSON.parse(data));
          });
        return `
            <div>
                <img
                  src="${item.url}"
                />
                <img
                  src="${item.url}"
                />
                <img
                  src="${item.url}"
                />
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
                molestias asperiores impedit, quibusdam nobis nostrum ducimus nisi
                eveniet fugit voluptatum quo voluptatem vero, dignissimos illum sunt
                laboriosam nesciunt earum sint.
              </p>
              <div id="quantity">
                <i onclick="decrement(${item.name})" class="fa-solid fa-square-minus fa-lg"></i>
                <h2 id="${item.name}">0</h2>
                <i onclick="increment(${item.name})" class="fa-solid fa-square-plus fa-xl"></i>
              </div>
              <h1>Similar Items</h1>`;
      }
    })
    .join(""));
};
let showSimilarItems = (items) => {
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
  </a>`;
    })
    .join(""));
};
let decrement = (name) => {
  let temp = cart.find((x) => x.name === name);
  if (temp.quantity > 0) temp.quantity -= 1;
  update(name);
};
let increment = (name) => {
  cart.find((x) => x.name === name).quantity += 1;
  update(name);
};
let addToCart = (item) => {
  if (cart.find((x) => x.name === item.name) === undefined) {
    cart.push({
      name: item.name,
      price: item.price,
      url: item.url,
      quantity: 0,
    });
  }
  // console.log(cart);
};
let update = (nam) => {
  let temp = cart.find((x) => x.name === nam);
  console.log(temp);
  console.log(id(`${nam}`));
  localStorage.setItem("data", JSON.stringify(cart));
};
