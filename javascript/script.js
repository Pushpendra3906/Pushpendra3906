var a=document.getElementById("root")
console.log(a)
function OnMouseOver(text)
{
    text.style.color="red"
}

function OnMouseLeave(text)
{
    text.style.color="black"
}

// document.getElementsByClassName('blue_white')[0].style.cssText="color:white;background-Color:blue"
// document.getElementsByClassName('blue_white')[1].style.cssText="color:white;background-Color:blue"


function SetStyle(txt)
{
    arr=document.getElementsByClassName('blue_white')
    for (var i=0;i<=arr.length;i++)
    {
        document.getElementsByClassName('blue_white')[i].style.cssText="color:white;background-Color:blue"
    }
    
}
var c=document.getElementsByTagName('p')
console.log(c)

function setFont(text)
{
    text.style.fontSize="50px"
}


let radii=[2,5,3,9,4,7]
let area=radii.map((r)=>{return Math.PI*r*r})
console.log(area)