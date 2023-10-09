export function menu(){
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menupage");
    content.append(menu);

    const title = document.createElement("id");
    title.id = "title"; //gives id a name 
    title.textContent = "Bean's Burgers ";
    menu.append(title);
    
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    menu.append(tabs);
    
    const home_tab = document.createElement("button");
    home_tab.className = "tab";
    home_tab.textContent = "Home";
    tabs.append(home_tab);

    const menu_tab = document.createElement("button");
    menu_tab.className = "tab";
    menu_tab.textContent = "Menu";
    tabs.append(menu_tab);

    const contact_tab = document.createElement("button");
    contact_tab.className = "tab";
    contact_tab.textContent = "Contact Us";
    tabs.append(contact_tab);

    const dishes = document.createElement("div");
    dishes.className = "dishes";
    menu.append(dishes);

    const d1 = document.createElement("div");
    d1.className = "dish_title";
    d1.textContent = "Big Bean Stack";
    dishes.append(d1);

    const p1 = document.createElement("img");
    p1.className = "dish_pic";
    p1.src = 'img/bigbeanstack.jpg'
    dishes.append(p1);
    
    const d2 = document.createElement("div");
    d2.className = "dish_title";
    d2.textContent = "Bean Fries";
    dishes.append(d2);

    const p2 = document.createElement("img");
    p2.className = "dish_pic";
    p2.src = "img/beanfries.jpg";
    dishes.append(p2);

    const d3 = document.createElement("div");
    d3.className = "dish_title";
    d3.textContent = "Water";
    dishes.append(d3);

    const p3 = document.createElement("img");
    p3.className = "dish_pic";
    p3.src = "img/water.jpg";
    dishes.append(p3);

    const footer = document.createElement("id");
    footer.id = "footer";
    footer.textContent = "Copyright @ 2023 Pauleena Phan";
    menu.append(footer);

    // const footerimg = document.createElement("img");
    // footerimg.src = "../img/githubicon.png";
    // menu.append(footerimg);
}