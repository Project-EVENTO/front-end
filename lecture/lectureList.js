const serverAddress = "http://localhost:5500";

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
        Array('lecture_title', 'lecture_host', 'lecture_place','lecture_grade','lecture_member','lecture_date','lecture_des' ).forEach((keyName) => {
            console.log(keyName)
            const property = ele[keyName]
            const td  = document.createElement("td")
            td.innerText = property
            td.id = `ele${data.indexOf(ele)}_${keyName}`
            console.log(td.id)
            tr.appendChild(td)
        })
        tr.id = `masterEle${data.indexOf(ele)}`
        table.appendChild(tr)

        // const newId = data.length
        // console.log(ele)
        // table.appendChild(tr)
        // tr.appendChild(td)
        // tr.id=newId
        // td.innerText=e.lecture_title
        
    })
}

getData();