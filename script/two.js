let userInput = prompt("请输入你的名字:"); 
let pp =document.querySelector(".pp")
pp.innerHTML=`${userInput}`
const span = document.getElementById("sp");  
let text = `尊敬的${userInput}老师，除夕之夜，愿您和家人欢乐满堂，新的一年事事顺心，桃李满天下，春晖遍四方。`;
let i = 0;  
let time = setInterval(function() {    
span.innerHTML += text[i];    
if (i === text.length - 1) {    
  clearInterval(time);
}  
i++; 
}, 100); 
document.addEventListener('DOMContentLoaded', function() {  
const btn = document.querySelector(".but");  
setTimeout(function() {  
  btn.style.display = "block";  
}, 5500);  
});