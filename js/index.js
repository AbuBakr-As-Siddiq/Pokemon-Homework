let elList = document.querySelector(".list");

function appendToDom(array, node) {
  for (items of array) {
    let newItem = document.createElement("li");
    let elSpan = document.createElement("span");
    let elHeading = document.createElement("h2");
    let elWeight = document.createElement("div");
    let elHeight = document.createElement("div");
    let elType = document.createElement("p");
    let elImg = document.createElement("img");

    elSpan.textContent = `${items.id}`;
    elHeading.textContent = `${items.name}`;
    elWeight.textContent = `${items.weight}`;
    elHeight.textContent = `${items.height}`;
    elImg.src = `${items.img}`;
    elType.textContent = `${items.type}`;

    newItem.setAttribute("class", "boxes");
    elSpan.setAttribute("class", "item__id");
    newItem.appendChild(elSpan);
    newItem.appendChild(elHeading);
    newItem.appendChild(elImg);
    newItem.appendChild(elType);
    newItem.appendChild(elWeight);
    newItem.appendChild(elHeight);
    node.appendChild(newItem);
  }
}

let elSelect = document.querySelector(".js-select");

appendToDom(pokemons, elList);
let result = [];
elSelect.addEventListener("change", () => {
  result = [];
  elList.innerHTML = "";
  let elSelectVal = elSelect.value;
  pokemons.forEach((poc) => {
    if (poc.type.includes(elSelectVal)) {
      result.push(poc);
    }
  });
  appendToDom(result, elList);
});
