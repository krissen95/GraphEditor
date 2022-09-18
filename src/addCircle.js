"use strict";
const screenClick = document.querySelector('#contentSvg');

//Circle tool attributes
const prop1 = document.querySelector('#tool_property1');
const prop2 = document.querySelector('#tool_property2');
const prop3 = document.querySelector('#tool_property3');
const prop4 = document.querySelector('#tool_property4');
const colorPickerLine = document.createElement('input');
const colorPickerFill = document.createElement('input');
const lineWidthNumber = document.createElement('input');
const radiusNumber = document.createElement('input');


//Select circle tool
function BtnSvgCircle(toggleSvgCircle, toolProperty){
    let toggle = document.querySelector('#btntoggle_svgcircle');
   
    if(toggleSvgCircle){
        toggleSvgCircle= !toggleSvgCircle;
        toggle.setAttribute('style','outline:none');
        screenClick.removeEventListener("click", AddSVGCircle);
        toolProperty.setAttribute('style', 'display:none');        
    }
    else if(!toggleSvgCircle){
        toggleSvgCircle= !toggleSvgCircle;
        toggle.setAttribute('style','background-color: white;');
        
        toolProperty.setAttribute('style', 'display:block');

        prop1.innerText="Fill Color ";
        colorPickerFill.setAttribute("type", "color");
        colorPickerFill.setAttribute("value", "#ffffff");
        prop1.appendChild(colorPickerFill);
        
        prop2.innerText="Line Color ";
        colorPickerLine.setAttribute("type", "color");
        colorPickerLine.setAttribute("value", "#000000");
        prop2.appendChild(colorPickerLine);

        prop3.innerText="Line Width ";
        lineWidthNumber.setAttribute("type", "number");
        lineWidthNumber.setAttribute("step", "1");
        lineWidthNumber.setAttribute("value", "4");
        prop3.appendChild(lineWidthNumber);

        prop4.innerText="Radius ";    
        radiusNumber.setAttribute("type", "number");
        radiusNumber.setAttribute("step", "1");
        radiusNumber.setAttribute("value", "40");
        prop4.appendChild(radiusNumber);
    }
    
}

//Adding circle to canvas
function AddSVGCircle(event, circleCount){
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("id", `circleId_${circleCount}`);
        circle.setAttribute("r" , radiusNumber.valueAsNumber);
        circle.setAttribute("stroke" , colorPickerLine.value);
        circle.setAttribute("stroke-width",lineWidthNumber.valueAsNumber);
        circle.setAttribute("fill",colorPickerFill.value);
        circle.setAttribute("cx" , event.clientX);
        circle.setAttribute("cy" , event.clientY);
        screenClick.appendChild(circle);
        console.log(circleCount);
        circleCount = circleCount + 1 ;
        return (circleCount);
}

export{BtnSvgCircle, AddSVGCircle};
