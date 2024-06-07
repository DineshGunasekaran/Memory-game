// Memory game script file
const tilesContainer = document.querySelector('.tiles');
const colors = ["red", "green", "purple", "blue", "yellow", "gold", "greenyellow", "brown"];
const colorPicklist = [...colors, ...colors]; //Will create new array 
const tileCount = colorPicklist.length;

// console.log(colorPicklist);



// Build_up Tiles 
for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorPicklist.length);
  const color = colorPicklist[randomIndex];

  // Calling tileDiv create function and getting div element
  const tileDiv = createTileDiv(color);

  // Removing the selected color from the color picklist
 
  // console.log(tilesContainer);
  tilesContainer.appendChild(tileDiv);
  console.log(color);
  colorPicklist.slice(randomIndex, 1);
  
  
}

// Create tile div element 
function createTileDiv(color) {
  const tileDiv = document.createElement("div");
  tileDiv.classList.add("tile");
  tileDiv.setAttribute("data-color", color);
  // console.log(tileDiv);

  // Onclick function
  tileDiv.addEventListener('click', () => {
    tileDiv.style.background = color;
  });
  return tileDiv;
}



