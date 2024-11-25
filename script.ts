const  toggleButton = document.getElementById("toggle_SKills")as HTMLButtonElement;
const skills = document.getElementById("SKills")as HTMLElement
toggleButton.addEventListener("click", ()=>{
   if(skills.style.display ==='none'){
       skills.style.display ="block"
   } else{
       skills.style.display ="none"
   }


});
