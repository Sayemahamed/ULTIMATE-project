let items = [
  {
    name: "lemon",
    price: 10,
    src: "https://images.pexels.com/photos/14410461/pexels-photo-14410461.jpeg?cs=srgb&dl=pexels-jenny-mavimiro-14410461.jpg&fm=jpg&_gl=1*awvqu3*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzU1ODk1Ni40LjEuMTY4MzU1OTA1NC4wLjAuMA..",
  },
  {
    name: "Chair",
    price: 200,
    src: "https://images.pexels.com/photos/12488389/pexels-photo-12488389.jpeg?cs=srgb&dl=pexels-c%C3%A9line-12488389.jpg&fm=jpg&w=1280&h=1920&_gl=1*1oijx5h*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzYyMDgxOC41LjEuMTY4MzYyMDgyOS4wLjAuMA..",
  },
  {
    name: "Chair",
    price: 80,
    src: "https://images.pexels.com/photos/14240588/pexels-photo-14240588.jpeg?cs=srgb&dl=pexels-%EC%A0%95-%EA%B7%9C%EC%86%A1-nui-malama-14240588.jpg&fm=jpg&w=1280&h=1920&_gl=1*1dahjg7*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzYyMDgxOC41LjEuMTY4MzYyMDkxMS4wLjAuMA..",
  },
];
let element = (tag) => document.querySelector(tag);
let displayProducts = () => {
  return (element("main").innerHTML = items
    .map((item) => {
      let { name, price, src } = item;
      return `
        <a href="details.html">
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
