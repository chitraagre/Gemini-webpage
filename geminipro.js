let profilefun = function(){
  console.log("File link sucessfully..!");

const headding= "chitraagre@gmail.com";

const profileheading= document.querySelector(".profile p");
console.log(profileheading);
console.log(headding.substring(0,1).toUpperCase());
profileheading.textContent = headding.substring(0,1).toUpperCase();
}

function gettingInputValue(){
  const input =document.querySelector(".main-input input");
  console.log(input);
  input.addEventListener('keydown', function(e){
  if(e.key=="Enter"){
    const inputvalue = input.value;
    console.log(inputvalue);
    input.value ="";
  }
  });

  const enterIcon = document.querySelector('.main-input i');
  console.log(enterIcon);
  enterIcon.addEventListener("click",function(e){
   const InputValueFromIcon = input.value;
   console.log(InputValueFromIcon);
    input.value ="";
  })
}
 profilefun();
  gettingInputValue();