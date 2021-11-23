const a = document.querySelectorAll('.schoolmeal-table-1');
const b = document.querySelectorAll('.schoolmeal-table-2');
const c = document.querySelectorAll('.schoolmeal-table-3');
const d = document.querySelectorAll('.schoolmeal-table-4');
const showSelectedNumber = document.querySelector('.showSelectedTable');
const selectTable = document.querySelector('.selectTable');


showSelectedNumber.style.display = "block";
selectTable.style.display = "block"

for (let i=0;i<a.length;i++){
    a[i].addEventListener("click",showSelected)
}

for (let i=0;i<a.length;i++){
    b[i].addEventListener("click",showSelected)
}

for (let i=0;i<a.length;i++){
    c[i].addEventListener("click",showSelected)
}

for (let i=0;i<a.length;i++){
    d[i].addEventListener("click",showSelected)
}

// 선택된 테이블의 번호와 선택할지 안할지 버튼을 만들어주는 함수
function showSelected(){
    console.log(this.id,'선택')
    // 선택된 번호를 옮김
    selectedNumber = this.id;
    // 선택된 번호를 보여줌
    document.querySelector(".showSelectedTable").innerText = selectedNumber;

    document.querySelector('.showselectedTable').style.display = "flex";

    // 선택을 눌렀을 때
    selectTable.addEventListener('click',submit);
}

function submit(){
    document.querySelector('.selectedInfo').value = selectedNumber;
    document.querySelector('.userInfo').value = Math.floor((Math.random() * 100) + 1)
    // console.log(document.querySelector('.selectedInfo').value)
    // console.log(document.querySelector('.userInfo').value)
    document.querySelector('sendSelectedIfo').submit();
}