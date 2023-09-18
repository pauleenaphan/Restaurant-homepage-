export function home(){
    const content = document.getElementById("content");
    const home = document.createElement("div");
    home.classList.add("homepage");
    home.textContent = "I am testing the homepage";

    content.append(home);
}

