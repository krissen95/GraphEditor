import { BtnSvgCircle, AddSVGCircle} from './addCircle.js';
import { BtnSvgSelect, SelectSVG } from './selectSvg.js';
import { fileSave, fileImportSvg, fileOpen } from './fileManager.js';

let toggleMenu = false;
var toggleSvgCircle = false;
var toggleSvgSelector = false;

//Canvas Svg Element definition
const screenClick = document.querySelector('#contentSvg');
var circleCount = 0;
const toolProperty = document.querySelector('.toolProperty');
toolProperty.setAttribute('style', 'display:none');


//Toggling menuBar dropdown
const toggleFileContent = document.querySelector('#content_btn_file');
const btnListenerFile = document.querySelector('#btn_file_toggle').addEventListener('pointerdown', function () {
  btnToggle(toggleFileContent);
});
const toggleEditContent = document.querySelector('#content_btn_edit');
const btnListenerEdit = document.querySelector('#btn_edit_toggle').addEventListener('pointerdown', function () {
  btnToggle(toggleEditContent);
});
//Toggling submenu on dropdown
const btnListenerFileSave = document.querySelector('#btn_filesave').addEventListener('pointerdown', function () {
  fileSave();
});
const btnListenerFileOpen = document.querySelector('#btn_fileopen').addEventListener('pointerdown', function () {
  console.log("opening");
  fileOpen();
});


//Toggling Circle tool
const btnListenerSvgCircle = document.querySelector('#btntoggle_svgcircle').addEventListener('pointerdown', function () {
  BtnSvgCircle(toggleSvgCircle, toolProperty);
  toggleSvgCircle = !toggleSvgCircle;
});

//Toggling Select tool
const btnListenerSvgSelector = document.querySelector('#btntoggle_svgselect').addEventListener('pointerdown', function () {
  BtnSvgSelect(toggleSvgSelector, toolProperty);
  toggleSvgSelector = !toggleSvgSelector;
});

//MenuBar toggle function
function btnToggle(toggleContent) {
  if (toggleMenu) {
    toggleMenu = !toggleMenu;
    toggleContent.setAttribute('style', 'display:none');
  } else if (!toggleMenu) {
    toggleMenu = !toggleMenu;
    toggleContent.setAttribute('style', 'display:block');
  }
}

//Listening for canvas activity
screenClick.addEventListener('pointerdown', (event) => {
  if (toggleSvgCircle === true) {
    circleCount = AddSVGCircle(event, circleCount);
  } else if (toggleSvgSelector === true) {
    SelectSVG();
  }
});



//------------------------------------------------
//testing saving
/*
const btn_filesave2 = document.querySelector('#btn_filesave2');
btn_filesave2.addEventListener('change', (event) => {
  if(showSaveFilePicker){
    console.log("saving in chrome");
  }
  else{
    console.log("saving in firefox");
  }
  
});*/


/*
<button class="btn-btn_filesave2">Save Project2</button>
<input type="file" name="savefile" />
const selectElement = document.querySelector('#ice-cream');
selectElement.addEventListener('change', (event) => {
    if(selectElement.value==2){
        console.log("saving");
    }
});*/