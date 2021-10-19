const mainCon = document.querySelector("#mainCon")


function onresize(){
    if(mainCon.clientWidth<1440){
        mainCon.style ="position: static"
    }
    else mainCon.style = "position: fixed"
}

