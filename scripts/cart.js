let element = (tag) => document.querySelector(tag);
let cart = JSON.parse(localStorage.getItem("data")) || [];

let displayProducts = () => {
  return (element("#billContainer").innerHTML = cart
    .map((item) => {
      return `<a href="details.html?identity=${item.name}">
        <div>
          <img src="${item.url}" />
          <h1>
            Total Amount : <span>${item.quantity * item.price}</span>
          </h1>
        </div>
      </a>`;
    })
    .join(""));
};
let update = () => {
  let totalMoney = 0,
    count = 0;
  cart.forEach((item) => {
    totalMoney += item.quantity * item.price;
    count += item.quantity;
  });
  element("#total").innerHTML = count;
  element("#sumOfBills").innerHTML = totalMoney;
};
update()
displayProducts();
