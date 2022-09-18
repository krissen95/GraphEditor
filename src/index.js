import { BtnSvgCircle, AddSVGCircle} from './addCircle.js';
import { BtnSvgSelect, SelectSVG } from './selectSvg.js';
import { FileSave, FileImportSvg, FileOpen } from './fileManager.js';

let toggleMenu = false;
var toggleSvgCircle = false;
var toggleSvgSelector = false;

/*Canvas Svg Element definition*/
const screenClick = document.querySelector('#contentSvg');
var circleCount = 0;
const toolProperty = document.querySelector('.toolProperty');
toolProperty.setAttribute('style', 'display:none');


//Toggling menuBar
const toggleFileContent = document.querySelector('#content_btn_file');
const btnListenerFile = document.querySelector('#btn_file_toggle').addEventListener('pointerdown', function () {
  btnToggle(toggleFileContent);
});
const toggleEditContent = document.querySelector('#content_btn_edit');
const btnListenerEdit = document.querySelector('#btn_edit_toggle').addEventListener('pointerdown', function () {
  btnToggle(toggleEditContent);
});
//Toggling submenu
const btnListenerFileSave = document.querySelector('#btn_filesave').addEventListener('pointerdown', function () {
  FileSave();
});
const btnListenerFileOpen = document.querySelector('#btn_fileopen').addEventListener('pointerdown', function () {
  console.log("opening");
  FileOpen();
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

/*menuBar toggle function*/
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
