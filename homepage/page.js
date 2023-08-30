var content = document.getElementById("content");

var heading = document.createElement("div");
heading.className("heading");
heading.textContent = "Mcdees";
content.appendChild(heading);

var picture = document.createElement("img");
picture.src = "/images/mcdonalds.png";
content.appendChild(picture);

var desc = document.createElement("div");
desc.className("desc");
desc.textContent = "Mcdees is good, I order the nuggets there every single time";
content.appendChild(desc);


export default content;