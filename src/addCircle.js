"use strict";
const screenClick = document.querySelector('.svgContent');

//Select circle tool
function BtnSvgCircle(toggleSvgCircle, toolProperty){
    let toggle = document.querySelector('#btnSvgCircleToggle');
   
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
        const prop1 = document.querySelector('#toolProperty1');
        const prop2 = document.querySelector('#toolProperty2');
        const prop3 = document.querySelector('#toolProperty3');
        const prop4 = document.querySelector('#toolProperty4');
        
        prop1.innerText="Fill Color";
        const colorPicker1 = document.createElement('input');
        colorPicker1.setAttribute("type", "color");
        colorPicker1.setAttribute("value", "white");
        prop1.appendChild(colorPicker1);
        

        prop2.innerText="Outline Color";
        const colorPicker2 = document.createElement('input');
        colorPicker2.setAttribute("type", "color");
        colorPicker2.setAttribute("value", "black");
        prop2.appendChild(colorPicker2);

        prop3.innerText="Line Width";
        const lineWidthNumber = document.createElement('input');
        lineWidthNumber.setAttribute("type", "number");
        lineWidthNumber.setAttribute("step", "1");
        prop3.appendChild(lineWidthNumber);

        prop4.innerText="Radius";
        const radiusNumber = document.createElement('input');
        radiusNumber.setAttribute("type", "number");
        radiusNumber.setAttribute("step", "1");
        prop4.appendChild(radiusNumber);
    }
    
}

//Adding circle to canvas
function AddSVGCircle(event, circleCount){
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("id", `circleId_${circleCount}`);
        circle.setAttribute("r" , "40");
        circle.setAttribute("stroke" , "green");
        circle.setAttribute("stroke-width","4");
        circle.setAttribute("fill","yellow");
        circle.setAttribute("cx" , event.clientX);
        circle.setAttribute("cy" , event.clientY);
        screenClick.appendChild(circle);
        circleCount = circleCount + 1 ;
}

export{BtnSvgCircle, AddSVGCircle};
