'use strict';

let fileHandle;

async function FileSave() {
  console.log('saving file...');
  /*[fileHandle] = await window.showSaveFilePicker();
  let stream = await fileHandle.createWritable();
  let text = "hello world"
  textarea.innerText = text;
  await stream.write(textarea.innerText); 
  await stream.close();*/
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
