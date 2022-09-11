import { BtnSvgCircle, AddSVGCircle} from "./addCircle.js";
import {BtnSvgSelect, SelectSVG} from "./selectSvg.js";

let toggleMenu = false;
var toggleSvgCircle = false;
var toggleSvgSelector = false;

/*Canvas Svg Element definition*/ 
const screenClick = document.querySelector('.svgContent');
var circleCount = 0;
const toolProperty = document.querySelector('.toolProperty');
toolProperty.setAttribute('style', 'display:none');



//Toggling Menubar
const toggleFileContent =document.querySelector('#fileBTNContent');
const btnListenerFile =document.querySelector('#btnFileToggle').addEventListener("click", function(){btnToggle(toggleFileContent)});
const toggleEditContent =document.querySelector('#editBTNContent');
const btnListenerEdit =document.querySelector('#btnEditToggle').addEventListener("click", function(){btnToggle(toggleEditContent)});

//Toggling Circle tool
const btnListenerSvgCircle = document.querySelector('#btnSvgCircleToggle').addEventListener("pointerdown", function(){
    BtnSvgCircle(toggleSvgCircle, toolProperty);
    toggleSvgCircle = !toggleSvgCircle;
});

//Toggling Select tool
const btnListenerSvgSelector = document.querySelector('#btnSvgSelectToggle').addEventListener("pointerdown", function(){
    BtnSvgSelect(toggleSvgSelector, toolProperty);
    toggleSvgSelector = !toggleSvgSelector;
});


/*Menubar toggle function*/
function btnToggle(toggleContent){
        console.log("file click!" + toggleContent);
        if(toggleMenu){
            toggleMenu= !toggleMenu;
            toggleContent.setAttribute('style','display:none');
        }
        else if(!toggleMenu){
            toggleMenu= !toggleMenu
            toggleContent.setAttribute('style','display:block');
        }
    }

    //Listening for canvas activity
    screenClick.addEventListener("pointerdown", event=>{
        if(toggleSvgCircle === true){
            AddSVGCircle(event, circleCount)
        }
        else if(toggleSvgSelector === true){
            SelectSVG()
        }
    })




    
    