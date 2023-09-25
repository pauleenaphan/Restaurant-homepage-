export function home(){
    const content = document.getElementById("content");

    //creates homepage class 
    const home = document.createElement("div");
    home.classList.add("homepage");
    content.append(home);

    const title = document.createElement("id");
    title.id = "title"; //gives id a name 
    title.textContent = "Bean's Burgers ";
    home.append(title);
    
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    home.append(tabs);
    
    const home_tab = document.createElement("div");
    home_tab.className = "tab";
    home_tab.textContent = "Home";
    tabs.append(home_tab);

    const menu_tab = document.createElement("div");
    menu_tab.className = "tab";
    menu_tab.textContent = "Menu";
    tabs.append(menu_tab);

    const contact_tab = document.createElement("div");
    contact_tab.className = "tab";
    contact_tab.textContent = "Contact Us";
    tabs.append(contact_tab);
    

    //description of the restaraunt
    const about_desc = document.createElement("id");
    about_desc.id = "about_desc";
    about_desc.textContent = "Bean's Burger has been around since 2021 and has strived to be the best burger joint in anaheim. The place makes you feel at home eating a nice fat burger.";
    home.append(about_desc);
    
    //restaraunt hours
    const hours = document.createElement("id");
    hours.id = "hours";
    hours.textContent = "Hours";
    home.append(hours);

    const hour_times = document.createElement("id");
    hour_times.id = "hour_times";
    hour_times.textContent = "Sunday: 7pm - 4pm";
    home.append(hour_times);

    const loc = document.createElement("id");
    loc.id = "location";
    loc.textContent = "Location";
    home.append(loc);

    const loc_desc = document.createElement("id");
    loc_desc.id = "loc_desc";
    loc_desc.textContent = "Shawn's neighbor backyard, frontyard, or inside the house (Locations may vary, please check site for updates)";
    home.append(loc_desc);

    const footer = document.createElement("id");
    footer.id = "footer";
    footer.textContent = "Pauleena"
    home.append(footer);
}

