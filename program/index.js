
function display(){
    var id=document.getElementById("id").value;
    var name=document.getElementById("name").value;
    var price=document.getElementById("price").value;
    var table=document.getElementById("show");
    var row=table.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    cell1.innerHTML=id;
    cell2.innerHTML=name;
    cell3.innerHTML=price;
}