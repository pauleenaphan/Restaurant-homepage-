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
    
    const about = document.createElement("id");
    about.id = "about";
    about.textContent = "About";
    home.append(about);

    //description of the restaraunt
    const about_desc = document.createElement("id");
    about_desc.id = "about_desc";
    about_desc.textContent = "Bean's Burger has been around since 2021 and has strived to be the best burger joint in anaheim. The place makes you feel at home eating a nice fat burger.";
    about.append(about_desc);
    
    //restaraunt hours
    const hours = document.createElement("id");
    hours.id = "hours";
    hours.textContent = "Hours";
    home.append(hours);

    const hour_times = document.createElement("id");
    hour_times.id = "hour_times";
    hour_times.textContent = "Sunday: 7pm - 4pm";
    hours.append(hour_times);

    const loc = document.createElement("id");
    loc.id = "location";
    loc.textContent = "Location";
    home.append(loc);

    const loc_desc = document.createElement("id");
    loc_desc.id = "loc_desc";
    loc_desc.textContent = "Shawn's neighbor backyard, frontyard, or inside the house (Locations may vary, please check site for updates)";
    loc.append(loc_desc);
}

