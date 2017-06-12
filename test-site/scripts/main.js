var i=0;

function multiply(num1,num2){
  var result=num1*num2;
  return result;
}
//
// if(i<3){
//   document.querySelector('html').onclick = function count() {
//       alert('つまらないサイトでごめんなさい。だから、つつかないでくださいませ。');
//       i++;
//       console.log("i="+i);
//     }
//   }else{
//     alert('押しすぎですわあ');
//   }
//
// var myImage=document.querySelector('img');
//
// myImage.onclick=function(){
//   var mySrc=myImage.getAttribute('src');
//   if(mySrc==='images/top.png'){
//     myImage.setAttribute('src','images/boy.png');
//   }else{
//     myImage.setAttribute('src','images/top.png');
//   }
// }

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
  var myName=prompt('Please enter your name');
  localStorage.setItem('name',myName);
  myHeading.textContent='ようこそ、我が城へ'+myName;
}
if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName=localStorage.getItem('name');
  myHeading.textContent='ようこそ、我が城へ'+storedName;
}

myButton.onclick=function(){
  setUserName();
}
