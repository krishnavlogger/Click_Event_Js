var button=document.querySelector("button");
var body=document.querySelector("body");
var color=['red','blue','white','yellow','green','pink','purple'];
button.addEventListener('click',changeB);
function changeB()
{
    var colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}
