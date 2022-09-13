import { BtnSvgCircle, AddSVGCircle} from "./addCircle.js";
import {BtnSvgSelect, SelectSVG} from "./selectSvg.js";

let toggleMenu = false;
var toggleSvgCircle = false;
var toggleSvgSelector = false;

/*Canvas Svg Element definition*/ 
const screenClick = document.querySelector('.contentSvg');
var circleCount = 0;
const toolProperty = document.querySelector('.toolProperty');
toolProperty.setAttribute('style', 'display:none');


//Toggling menuBar
const toggleFileContent =document.querySelector('#content_btn_file');
const btnListenerFile =document.querySelector('#btn_file_toggle').addEventListener("click", function(){btnToggle(toggleFileContent)});
const toggleEditContent =document.querySelector('#content_btn_edit');
const btnListenerEdit =document.querySelector('#btn_edit_toggle').addEventListener("click", function(){btnToggle(toggleEditContent)});

//Toggling Circle tool
const btnListenerSvgCircle = document.querySelector('#btntoggle_svgcircle').addEventListener("pointerdown", function(){
    BtnSvgCircle(toggleSvgCircle, toolProperty);
    toggleSvgCircle = !toggleSvgCircle;
});

//Toggling Select tool
const btnListenerSvgSelector = document.querySelector('#btntoggle_svgselect').addEventListener("pointerdown", function(){
    BtnSvgSelect(toggleSvgSelector, toolProperty);
    toggleSvgSelector = !toggleSvgSelector;
});

/*menuBar toggle function*/
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