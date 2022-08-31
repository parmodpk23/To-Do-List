let deleteid = "deleteid";
function addid() {
    deleteid = deleteid + 1;
    return deleteid;
}
function addingItem() {
    let itemName= document.getElementById("todo").value;
    if (itemName ===""){
        alert("add something");
    }
    else{    
    document.getElementById("banner").style="display:none";
    document.getElementById("todo").value="";
    document.getElementById("autolist").innerHTML += `<li class="clearlist" id=${deleteid}><p>${itemName}</p> <button id=${deleteid} onclick="deletelist()">delete</button></li>`;
    deleteid = deleteid + 1;
    return deleteid;
    }
}
function clearItem(){
  let clr = document.getElementById("autolist");
  while(clr.hasChildNodes()){
  clr.removeChild(clr.firstChild)
}
document.getElementById("banner").style="display:block";
}

function deletelist() {
    let clr = document.getElementById("autolist");

    let abc=document.getElementsByTagName('li')[0].id;
    document.getElementById(abc).remove();
    document.getElementById("banner").style="display:block";
}
