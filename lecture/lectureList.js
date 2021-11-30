const serverAddress = "http://10.80.162.177:5500";


const table = document.querySelector("#lectureList")
let fixing = true

function getData(){
    axios.get(serverAddress+'/lecture')
    .then((req)=>{
       console.log(req.data)
       const data = req.data
        lectureList(data)
    }).catch((e)=>{
        console.log(e);
    })
}


function lectureList(data){
    data.map((ele,index)=>{ 
        const tr = document.createElement("tr")
        const delbtn = document.createElement("button")
        const updateBtn = document.createElement("button")
        Array('lc_title', 'lc_host', 'lc_place','lc_grade','lc_max','lc_date','lc_des' ).forEach((keyName) => {
            // console.log(keyName)
            const property = ele[keyName]
            const td  = document.createElement("td")
            td.innerText = property
            td.id = `ele${data.indexOf(ele)}_${keyName}`
            // console.log(td.id)
            tr.appendChild(td)
        })
        tr.id = `masterEle${data.indexOf(ele)}`
        delbtn.innerText="❌"
        updateBtn.innerText="🔧"
        delbtn.id="del"+ele['lc_seq']
        updateBtn.id="update"+ele['lc_seq']
        delbtn.addEventListener("click",delLecture)
        updateBtn.addEventListener("click",function (){updateLecture(ele,index)})
        tr.appendChild(updateBtn)
        tr.appendChild(delbtn)
        table.appendChild(tr)
        
    })
}

function delLecture(event){
    const id = event.target.id
    axios.post(serverAddress+'/lecture/delete',{id:id})
    .then(()=>{
        getData();  
    })
}

function updateLecture(ele,index){
    console.log(ele)
    console.log(index)
    const Title = document.querySelector(`#ele${index}_lc_title`);
    const Host = document.querySelector(`#ele${index}_lc_host`);
    const Place = document.querySelector(`#ele${index}_lc_place`);
    const Grade = document.querySelector(`#ele${index}_lc_grade`);
    const Max = document.querySelector(`#ele${index}_lc_max`)
    const Date = document.querySelector(`#ele${index}_lc_date`);
    const Des = document.querySelector(`#ele${index}_lc_des`);
    const tr = document.querySelector("tr")
    const checkBtn = document.createElement("button")
    const inputBox = document.createElement("input")    

    inputBox.value = Title.childNodes[0].nodeValue  

    Title.childNodes[0].nodeValue = "" 
    Host.childNodes[0].nodeValue = "" 
    Place.childNodes[0].nodeValue = "" 
    Grade.childNodes[0].nodeValue = "" 
    Max.childNodes[0].nodeValue = "" 
    Date.childNodes[0].nodeValue = "" 
    // Des.childNodes[0].nodeValue = "" 
    
    Title.appendChild(inputBox)
    checkBtn.innerText="✅"
    tr.appendChild(checkBtn)
}

getData();