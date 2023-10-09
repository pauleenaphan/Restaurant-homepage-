import {home} from '../pages/home.js'
import {menu} from '../pages/menu.js'
import {contact} from '../pages/contact.js'
//We need double dots because it thinks we are in the src directory 
//double dots will tell them to look for a new parent directory(pages) and therefore look for home.js

//home will always be called first since its the main homepage

home();

const content = document.getElementById("content");
const homepage = document.getElementsByClassName("homepage");
const menupage = document.getElementsByClassName("menupage");

//const home = document.getElementsByClassName("homepage");
//menu();
var tabs = document.getElementsByClassName("tab");
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', displayTab);
}

function displayTab(e){
    //remove all the current content
    var val = e.target.innerHTML;
    console.log(val);

    if(val == "Menu"){
        //hide the current page
        content.children[0].remove();
        //run the desired page
        menu();
        //set the loop again because the even listeners are deleted when we remove the child
        for(let i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click', displayTab);
        }     

    }else if(val == "Home"){
        content.children[0].remove();
        home();
        for(let i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click', displayTab);
        }    
    }else if(val == "Contact Us"){
        content.children[0].remove();
        contact();
        for(let i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click', displayTab);
        }  
    }
    //depending on the tab pressed, load the page
}