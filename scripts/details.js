let element = (tag) => document.querySelector(tag);
let cart = JSON.parse(localStorage.getItem("data")) || [];
fetch("/data")
  .then((response) => response.json())
  .then((data) => {
    displayMainProduct(data);
  });
let nam = new URLSearchParams(window.location.search).get("identity");
let displayMainProduct = (items) => {
  return (element("section").innerHTML = items
    .map((item) => {
      if (item.name === nam) {
        addToCart(item);
        fetch(`/relatedData?identity=${item.type}`)
          .then((response) => response.json())
          .then((data) => {
            showSimilarItems(data);
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
                <i onclick="decrement()" class="fa-solid fa-square-minus fa-lg"></i>
                <h2 id="${item.name}">0</h2>
                <i onclick="increment()" class="fa-solid fa-square-plus fa-xl"></i>
              </div>
              <h1>Similar Items</h1>`;
      }
    })
    .join(""));
};
let decrement = () => {
  let temp = cart.find((x) => x.name === nam);
  if (temp.quantity > 0) temp.quantity -= 1;
  update();
};
let increment = () => {
  cart.find((x) => x.name === nam).quantity += 1;
  update();
};
let showSimilarItems = (items) => {
  update();
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
let addToCart = (item) => {
  if (cart.find((x) => x.name === item.name) === undefined) {
    cart.push({
      name: item.name,
      price: item.price,
      url: item.url,
      quantity: 0,
    });
  }
};
let update = () => {
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
    if (item.name == nam) element("#" + nam).innerText = item.quantity;
  });
  element("#total").innerHTML = count;
  localStorage.setItem("data", JSON.stringify(cart));
};
