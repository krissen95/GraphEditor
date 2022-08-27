    /*UI functionality*/
let toggleFile = false;
let toggleEdit = false;
let toggSvgCircle = false;
    function btnToggle(toggleContent){
        let togglebox = document.querySelector(toggleContent);
        if(toggleFile){
            toggleFile=false;
            togglebox.setAttribute('style','display:none');
        }
        else if(!toggleFile){
            toggleFile=true;
            togglebox.setAttribute('style','display:block');
        }
    }

    function btnSvgCircle(toggleContent){
        let togglebox = document.querySelector(toggleContent);
        if(toggleFile){
            toggleFile=false;
            togglebox.setAttribute('style','outline:none');
        }
        else if(!toggleFile){
            toggleFile=true;
            togglebox.setAttribute('style','background-color: white;');
            let screenClick = document.querySelector(toggleContent);
            screenClick.addEventListener('onclick', spawnCircle);
            console.log("click");
            
        }
    }


    function spawnCircle(e){
        console.log("spawn");
    };