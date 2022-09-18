'use strict';

let fileHandle;
const svgCanvas = document.querySelector('#contentSvg');

async function FileSave() {
  for(let i=0; i<svgCanvas.childElementCount; i++){
    console.log(svgCanvas.childNodes[i]);
  }
  
  

  let myBlob = new Blob(
    //JSON.stringify(value, replacer, space)
    [JSON.stringify({hello: "this", is: "data"}),],    
    {type: "application/json"}
  );
  
  let fileHandle = await window.showSaveFilePicker();
  let stream = await fileHandle.createWritable();
  await stream.write(myBlob);
  //await stream.close();
}



async function FileOpen() {
  console.log('loading file...');
  [fileHandle] = await window.showOpenFilePicker();
  let fileData = await fileHandle.getFile();
  let fileText = await fileData.text();
  console.log(fileText);

}


async function FileImportSvg() {
  console.log('importingj file...');
  [fileHandle] = await window.showOpenFilePicker();


}

export { FileSave, FileImportSvg, FileOpen };
