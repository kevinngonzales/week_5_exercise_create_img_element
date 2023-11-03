// Start with a JS file linked to an HTML file
// Using JS, create an <img> element 
// Use a method to give it a value for the src attribute
// Append it to the page inside another element besides the body element
// Open the html file in the browser or use Live Server to view it
// Call the remove() method on your img element to remove it from the page


let imgContainer = document.createElement("div");

let addImage = document.getElementById("addImage");
addImage.addEventListener("click", function() {
myImg = document.createElement("img")
myImg.setAttribute(
"src","https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
  );
  document.body.append(imgContainer);
  imgContainer.appendChild(myImg);
});

let removeImgButton = document.getElementById("deleteButton");
removeImgButton.addEventListener("click", function() {imgContainer.remove();});




