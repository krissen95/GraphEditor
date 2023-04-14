'use strict';
const svgCanvas = (document.querySelector('#contentSvg')); 
const domParser = new DOMParser();

async function fileSave() {
//Extract svg elements from canvas  
  let svgElements ="";
  for(let i = 1; i < (svgCanvas.children.length+1); i++){
    svgElements += svgCanvas.childNodes[i].outerHTML;
  }

  if(!window.showSaveFilePicker){ 
    //FileSaver code following below for browsers without showSaveFilePicker
    const blob = new Blob([svgElements], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "svgfile.txt");
  }

  //For browsers without showSaveFilePicker
  else if (window.showSaveFilePicker){
    console.log("showsavefilepicker");
    const opts = {
      types: [{
        description: 'Text file',
        accept: {'text/plain': ['.txt']},
      }],
    };
    const handle = await window.showSaveFilePicker(opts);
    const writable = await handle.createWritable();
    await writable.write(svgElements);
    await writable.close();
    return handle;
  }
}



async function fileOpen() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
      let file = e.target.files[0]; 
      let reader = new FileReader();
      reader.readAsText(file,'UTF-8');     
      reader.onload = readerEvent => {
        let content = readerEvent.target.result; 
        svgCanvas.innerHTML = content;
     }
    }
    input.click();
}


async function fileImportSvg() {
  console.log('importing file...');
  [fileHandle] = await window.showOpenFilePicker();
}

export { fileSave, fileImportSvg, fileOpen };