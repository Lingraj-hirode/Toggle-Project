// this program is about Toggle Project 

let togDiv = document.querySelector("#Tog");
// let div = document.querySelector("div");
let currMode = "light"; // dark


togDiv.addEventListener("mouseover", () => {
  if(currMode === "light") {
    currMode = "dark";
    togDiv.classList.add("dark");
    togDiv.classList.remove("light");
    
  }else {
    currMode = "light";
    togDiv.classList.add("light");
    togDiv.classList.remove("dark");

  }
  console.log(currMode);
});
