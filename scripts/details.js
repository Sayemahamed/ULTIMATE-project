let element = (tag) => document.querySelector(tag);
let nam = new URLSearchParams(window.location.search).get("name");
let displayMainProduct = () => {
  return (element("section").innerHTML = items.map((item) => {
    if (item.name === nam)
      return `
            <div>
                <img
                  src="${item.src}"
                />
                <img
                  src="${item.src}"
                />
                <img
                  src="${item.src}"
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
  }));
};
displayMainProduct();
