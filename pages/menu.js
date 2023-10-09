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

    const dish_title = document.createElement("div");
    dish_title.classname = "dish_title";
    dish_title.textContent = "BIg Bean Stack";
    menu.append(dish_title);

}