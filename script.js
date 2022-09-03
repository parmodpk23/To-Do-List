let deleteid = "did";
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
    document.getElementById("autolist").innerHTML += `<li class="clearlist" id=${deleteid}><p>${itemName}</p> <button id=${deleteid} onclick="deletelist(this.id);callbanner();">delete</button></li>`;
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

function deletelist(dl) {
   document.getElementById(dl).remove();
   
   //callbanner();
       //  document.getElementById("banner").style="display:block";
    //let clr = document.getElementById("clearlist");
    //let abc=document.getElementsByTagName('button')[0].id;
    //console.log(dl);
    //console.log(abc);
   // document.getElementById("banner").style="display:block";
}
function callbanner() {

    if(document.getElementById("autolist").childElementCount == 0){
        document.getElementById("banner").style="display:block";
    }
}