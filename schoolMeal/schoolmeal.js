const line1 = document.querySelector(".schoolmeal-tables-set-line-1");
const line2 = document.querySelector(".schoolmeal-tables-set-line-2");
const line3 = document.querySelector(".schoolmeal-tables-set-line-3");
const line4 = document.querySelector(".schoolmeal-tables-set-line-4");


// 자리의 번호를 부여
var counter =1;
// line1
function makingTable(tableNumber,line){
for (var i=0;i<tableNumber;i++){
    var table = document.createElement('div');
    table.setAttribute("class","schoolemael-table-set");
    line.appendChild(table);
    for (var j=0;j<4;j++){
        // 테이블 번호
        var eachTable = document.createElement('div');
        eachTable.setAttribute("class",`schoolmeal-table-${j+1}`);
        eachTable.setAttribute("id",`${counter}`);
        table.appendChild(eachTable);

        // schoolmeal-table-1,2,3,4 의
        // 콘텐츠(번호)
        var eachTableContent = document.createElement('div');
        eachTableContent.setAttribute("class","schoolmeal-tablecontent");
        eachTable.appendChild(eachTableContent);

        var eachTableContentNumber = document.createTextNode(`${counter++}`);
        eachTableContent.appendChild(eachTableContentNumber);
    }
}
}





makingTable(6,line1);
makingTable(9,line2);
makingTable(9,line3);
makingTable(6,line4);




// line2