let element = (tag) => document.querySelector(tag);
let gender = JSON.parse(localStorage.getItem("gender")) || "all";
setGender = () => {
  gender = element("#select").value;
  localStorage.setItem("gender", JSON.stringify(gender));
};
fetch("/data")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(JSON.parse(data));
  })
  .catch((error) => console.log(error));
let displayProducts = (items) => {
  element("#select").value = gender;
  return (element("main").innerHTML = items
    .map((item) => {
      if (item.gender === "all" || item.gender === gender)
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
let updateCart = () => {
  cart = JSON.parse(localStorage.getItem("data")) || [];
  cart = cart.filter((item) => item.quantity !== 0);
  localStorage.setItem("data", JSON.stringify(cart));
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });
  element("#total").innerHTML = count;
};
updateCart();
