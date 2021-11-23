const serverAddress = "http://10.80.162.177:5500";


const table = document.querySelector("#lectureList")

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
    data.map((ele)=>{ 
        const tr = document.createElement("tr")
        const delbtn = document.createElement("button")
        Array('lc_title', 'lc_host', 'lc_place','lc_grade','lc_max','lc_date','lc_des' ).forEach((keyName) => {
            console.log(keyName)
            const property = ele[keyName]
            const td  = document.createElement("td")
            td.innerText = property
            td.id = `ele${data.indexOf(ele)}_${keyName}`
            console.log(td.id)
            tr.appendChild(td)
        })
        tr.id = `masterEle${data.indexOf(ele)}`
        delbtn.innerText="❌"
        delbtn.id=ele['lc_seq']
        delbtn.addEventListener("click",delLecture)
        tr.appendChild(delbtn)
        table.appendChild(tr)
        
    })
}

function delLecture(event){
    const id = event.target.id
    axios.post(serverAddress+'/lecture/delete',{id:id})
    .then((req)=>{
        console.log(suc)
        getData();
    })
}


getData();