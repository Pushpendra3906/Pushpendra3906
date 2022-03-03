var task= document.querySelector('#myTask')
var listTasks= document.querySelector('#myUL')
var closeButtons = document.getElementsByClassName('close')
var lis= document.getElementsByClassName('item')

console.log(task)
for(var i=0; i< closeButtons.length; i++){

    closeButtons[i].onclick= function(){
        var li= this.parentElement;
        listTasks.removeChild(li)
    }

}

for(var j=0;j<lis.length;j++){
    lis[j].onclick= function(){
        this.classList.toggle('checked')
    }
}

// listTasks.addEventListener('click', function(e){
//     if(e.target.tagName=='LI'){
//         e.target.classList.toggle('checked')
//     }
// })

function newElement()
{
    var newli=document.createElement('li')
    var text=document.getElementById('myTask').value
    var t=document.createTextNode(text)
    newli.innerHTML=t
    t.appendChild(newli)
    listTasks.appendChild(t)

}