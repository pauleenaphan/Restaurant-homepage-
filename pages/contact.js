export function contact(){
    const content = document.getElementById("content");

    //creates homepage class 
    const contact = document.createElement("div");
    contact.classList.add("contactpage");
    content.append(contact);

    const title = document.createElement("id");
    title.id = "title"; //gives id a name 
    title.textContent = "Bean's Burgers ";
    contact.append(title);
    
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    contact.append(tabs);
    
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

    const contact_cards = document.createElement("div");
    contact_cards.className = "contact_cards";
    contact.append(contact_cards);

    const c1 = document.createElement("div");
    c1.className = "contact_name";
    c1.textContent = "Head Chef Bean: 713-333-3333"
    contact_cards.append(c1);

    const pc1 = document.createElement("img");
    pc1.className = "contact_img";
    pc1.src = "img/chefbean.png"
    contact_cards.append(pc1);

    const c2 = document.createElement("div");
    c2.className = "contact_name";
    c2.textContent = "Patty Flipper Oreo: 819-222-2222";
    contact_cards.append(c2);

    const pc2 = document.createElement("img");
    pc2.className = "contact_img";
    pc2.src = "img/cheforeo.png";
    contact_cards.append(pc2);

    const c3 = document.createElement("div");
    c3.className = "contact_name";
    c3.textContent = "Fry fryer Coal: N/A";
    contact_cards.append(c3);

    const pc3 = document.createElement("img");
    pc3.className = "contact_img";
    pc3.src = "img/chefcoal.png";
    contact_cards.append(pc3);

    const c4 = document.createElement("div");
    c4.className = "contact_name";
    c4.textContent = "Patty Assembler Rocky: 999-222-3393";
    contact_cards.append(c4);

    const pc4 = document.createElement("img");
    pc4.className = "contact_img";
    pc4.src = "img/chefrocky.png";
    contact_cards.append(pc4);

    const footer = document.createElement("id");
    footer.id = "footer";
    footer.textContent = "Copyright @ 2023 Pauleena Phan";
    contact.append(footer);
}