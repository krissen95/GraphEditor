let toggleFile = false;
let toggleEdit = false;
var toggleSvgCircle = false;
const screenClick = document.querySelector('.Content');

/*Canvas Svg Element definition*/ 
const node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
node.setAttribute("class", "svgContent");
node.setAttribute("width", "100");
node.setAttribute("height", "100");
//const circle = document.createElement("circle");
const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
circle.setAttribute("cx" , "50");
circle.setAttribute("cy" , "50");
circle.setAttribute("r" , "40");
circle.setAttribute("stroke" , "green");
circle.setAttribute("stroke-width","4");
circle.setAttribute("fill","yellow");
node.appendChild(circle);

/*Main Menu*/
    function btnToggle(toggleContent){
        let togglebox = document.querySelector(toggleContent);
        if(toggleFile){
            toggleFile= !toggleFile;
            togglebox.setAttribute('style','display:none');
        }
        else if(!toggleFile){
            toggleFile= !toggleFile
            togglebox.setAttribute('style','display:block');
        }
    }

    /*SVG Tool button circle*/
    function btnSvgCircle(event){
        let toggle = document.querySelector('.btnSvgCircleToggle');
        event.stopPropagation();
        if(toggleSvgCircle){
            console.log("circle set to false");
            toggleSvgCircle= !toggleSvgCircle;
            toggle.setAttribute('style','outline:none');
            screenClick.removeEventListener("click", AddSVGCircle);
        }
        else if(!toggleSvgCircle){
            console.log("circle set to true");
            toggleSvgCircle= !toggleSvgCircle;
            toggle.setAttribute('style','background-color: white;');
        }
    }
function AddSVGCircle(event){
    if(!event.detail||event.detail==1){
        console.log("spawn");
        console.log(event.clientY, event.clientX);
        screenClick.appendChild(node);
    }
}

   /*Master Tool Manager*/
    function WorkMode(){
        if(toggleSvgCircle === true){screenClick.addEventListener("click", AddSVGCircle);}

        window.requestAnimationFrame(WorkMode);
    }

    /*Canvas Update Loop*/
    WorkMode();
    