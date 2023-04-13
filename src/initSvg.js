//#3 Prøv å få til printing av informasjon inni objectet ved å bruke "await 2000ms" elns

//loading method + css overlay
//write json to xml write to svg canvas
//should circle connections be looked up from:
    //the json 
    //sepperate constructed object ?
        //if so, hierarchy/layer could use this ?
async function getjsonData(){
  fetch('/src/svgData.json')
  .then(response=>response.json())
  .then(data =>{
    //printObject(data);
    return data;
  })
}

//using recursion in order to go deeper inside the object
function printObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === 'object') {
        console.log(key + ':');
        printObject(value);
      } else {
        console.log(key + ': ' + value);
      }
    }
  }
}

//store data on svgData, rewrite svgData.json
//fill canvas from that data
  //stringify json
  //convert string to xml objects

 function initCanvas(){
  let data;
  data = getjsonData();
  writeJsontoXML(data); 
}



function checkingJsonHierarcy(data){
  const jsonFlags = {
    flag1: data.maingraphic,
    flag2: data.maingraphic.g_0,
    flag3: data.maingraphic.g_0.g_viz,
    flag4: data.maingraphic.g_0.g_viz.g_viz_att,
    flag5: data.maingraphic.g_0.g_ele,
    flag6: data.maingraphic.g_0.g_ele.g_ele_att
  };

  let hierarchyCheck = '';
  //const keys = Object.keys(data);
  Object.keys(jsonFlags).forEach(key => {
    if(data[keys]){
      console.log(data[keys]);
    }
    else{
      console.log("missing");
    }
    //console.log(jsonFlags[key]);
  });

  /*for (let i=0; i<Object.keys(jsonFlags).length; i++){
    console.log(jsonFlags[keys]);  
  }*/
  
}

//get a loading function up and going first
async function writeJsontoXML(data){
  //for (maingraphic)
    //for ("g_0")
      //for ("g_viz":)
        //for ("g_viz_att")
        //for (circle visualizing attributes)
      //for ("g_ele":)
        //for ("g_ele_att":)
        //for ("circleId_0")
          //for (circle visualizing attributes)
          //console.log("Hello world");
  try{
    const response = await fetch('/src/svgData.json');
    const data = await response.json();
    // error checking
    checkingJsonHierarcy(data);





  }catch (error){
    console.log(error);
  }


/*
  for (let data in obj) {
    xml += obj[data] instanceof Array ? '' : '<' + data + '>';
    if (obj[data] instanceof Array) {
      for (let array in obj[data]) {
        let string = '';
        string += JSON.stringify(obj[data][array]);
        xml += '<' + data + '>';
        xml += OBJtoXML(new Object(obj[data][array]));
        xml += '</' + data + '>';
      }
    } else if (typeof obj[data] == 'object') {
      let string = '';
      string += obj[data];
    } else {
      let string = '';
      string += JSON.stringify(obj[data]);
      xml += obj[data];
    }
    xml += obj[data] instanceof Array ? '' : '</' + data + '>';
  }
  let xml2 = xml.replace(/<\/?[0-9]{1,}>/g, '');
  return xml2;
  */
}

export {initCanvas}

