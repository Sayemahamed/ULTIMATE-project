let element = (tag) => document.querySelector(tag);
fetch("http://localhost:3000/data")
  .then((response) => response.json())
  .then((data) => {
    displayMainProduct(JSON.parse(data));
  });
let nam = new URLSearchParams(window.location.search).get("identity");
let displayMainProduct = (items) => {
  return (element("section").innerHTML = items.map((item) => {
    if (item.name === nam) {
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
                <i class="fa-solid fa-square-minus fa-lg"></i>
                <h2>${item.price}</h2>
                <i class="fa-solid fa-square-plus fa-xl"></i>
              </div>
              <h1>Similar Items</h1>
                `;
    }
  }));
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
