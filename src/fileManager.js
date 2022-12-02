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
    //StreamSaver code following below for browsers without showSaveFilePicker
    const blob = new Blob([svgElements])
    const fileStream = streamSaver.createWriteStream('svgfile.txt', {
          size: blob.size // Makes the percentage visiable in the download
        })
    const readableStream = blob.stream()

    // (Safari may have pipeTo but it's useless without the WritableStream)
    if (window.WritableStream && readableStream.pipeTo) {
      return readableStream.pipeTo(fileStream)
        .then(() => console.log('done writing'))
    }
    // Write (pipe) manually
    window.writer = fileStream.getWriter()
    const reader = readableStream.getReader()
    const pump = () => reader.read()
      .then(res => res.done
        ? writer.close()
        : writer.write(res.value).then(pump))
    pump()
  }
  
  //For browsers without showSaveFilePicker
  else if (window.showSaveFilePicker){
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
  console.log('importingj file...');
  [fileHandle] = await window.showOpenFilePicker();


}

export { fileSave, fileImportSvg, fileOpen };

/*const pickerOpts = {
  types: [
    {
      description: 'Xml',
      accept: {
        'text/plain': ['.xml']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};*/

/*const pickerOpts = {
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};*/