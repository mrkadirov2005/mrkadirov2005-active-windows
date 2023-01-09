function showAnswers(){
  document.getElementsByTagName("p")[0].style.display="block";
  document.getElementsByTagName("p")[1].style.display="block";
  document.getElementsByTagName("p")[2].style.display="block";
  document.getElementsByTagName("p")[3].style.display="block";
  document.getElementsByTagName("p")[4].style.display="block";
  document.getElementsByTagName("p")[5].style.display="block";
  document.getElementsByTagName("p")[6].style.display="block";
  document.getElementsByTagName("p")[7].style.display="block";
  document.getElementsByTagName("p")[8].style.display="block";
  document.getElementsByTagName("p")[9].style.display="block";
;
  var itemoneEL=document.getElementById("answer1");
 itemoneEL.style.display="block";
  var itemtwoEL=document.getElementById("answer2");
 itemtwoEL.style.display="block";
  var itemthreeEL=document.getElementById("answer3");
 itemthreeEL.style.display="block";
  var itemfourEL=document.getElementById("answer4");
 itemfourEL.style.display="block";
  var itemfiveEL=document.getElementById("answer5");
 itemfiveEL.style.display="block";
  var itemsixEL=document.getElementById("answer6");
 itemsixEL.style.display="block";
  var itemsevenEL=document.getElementById("answer7");
 itemsevenEL.style.display="block";
  var itemeightEL=document.getElementById("answer8");
 itemeightEL.style.display="block";
  var itemnineEL=document.getElementById("answer9");
 itemnineEL.style.display="block";
  var itemtenEL=document.getElementById("answer10");
 itemtenEL.style.display="block";
 var wraper=document.getElementById("wrapper").style.backgroundColor="transparent";

}
function closeAnswers(){
document.getElementsByTagName("p")[0].style.display="none";
document.getElementsByTagName("p")[1].style.display="none";
document.getElementsByTagName("p")[2].style.display="none";
document.getElementsByTagName("p")[3].style.display="none";
document.getElementsByTagName("p")[4].style.display="none";
document.getElementsByTagName("p")[5].style.display="none";
document.getElementsByTagName("p")[6].style.display="none";
document.getElementsByTagName("p")[7].style.display="none";
document.getElementsByTagName("p")[8].style.display="none";
document.getElementsByTagName("p")[9].style.display="none";
var wraper=document.getElementById("wrapper").style.backgroundColor="transparent";

}
function openWR(){
  var right=document.getElementsByClassName("parts-right")[0].classList.add("parts-right-animated");
  console.log(right)
  // console.log(right)
  document.getElementById("rightWR").style.display="block";
  document.getElementById("end").style.display="none";

}
function openWL(){
  var right=document.getElementsByClassName("parts-left")[0].classList.add("parts-left-animated");
  console.log(right)
  document.getElementById("leftWL").style.display="block"
  // console.log(right)
  document.getElementById("end").style.display="none";


}
function closeWL(){
  var right=document.getElementsByClassName("parts-left")[0].classList.remove("parts-left-animated");
  document.getElementById("leftWL").style.display="none"

console.log(leftElement)
}
function closeWR(){
  var right=document.getElementsByClassName("parts-right")[0].classList.remove("parts-right-animated");

  document.getElementById("rightWR").style.display="none"
  document.getElementById("end").style.display="block";


}