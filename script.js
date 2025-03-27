const modal=document.getElementById("modal");
const foodname=document.getElementById("foodname");
const sum=document.getElementById("sum");
const box=document.getElementById("box");

 function hisobla(nomi,narxi){
    box.style="filter:blur(20px)";
    modal.style="display:block";
    const nechta=prompt(nomi+"nechta zakas qilmoqchisiz");
    foodname.textContent=nomi;
    sum.textContent="Umumiy summa" + (narxi*nechta)+"som";
}


function qabulqilish(){
    alert("Buyutma qabul qilindu !!!");
    box.style="filter:blur(0px)";
    modal.style="display:none";
}

function radetish(){
    const a=confirm("Rostdangam rad etmoqchimisiz!!");
    if(a==false){
        return
    }else{
        alert("Rad etildi!!");
        box.style="filter:blur(0px)";
    modal.style="display:none";
    }
}