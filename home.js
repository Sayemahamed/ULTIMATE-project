let element = (tag) => document.querySelector(tag);
let displayProducts = () => {
  return (element("main").innerHTML = items
    .map((item) => {
      let { name, price, src } = item;
      return `
        <a href="details.html?name=${name}">
        <div>
          <img
            src=${src}/>
          <p>${name}</p>
          <m><i class="fa-solid fa-dollar-sign"></i>${price}</m>
        </div>
      </a>
        `;
    })
    .join(""));
};
displayProducts();
