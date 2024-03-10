const img = document.querySelector(".img");
const email = document.querySelector(".email");
const name = document.querySelector(".name");
const create = document.querySelector(".create");
const read = document.querySelector(".read");
const divs = document.querySelector(".divs");
const del = document.querySelector(".delete");
const div=document.querySelector(".div")




read.addEventListener("click",()=>{
  divs.style.display="block"
  
})

divs.addEventListener("click",(e)=>{
  e.target.parentNode.remove()
 
})


function task() {
  create.addEventListener("click", () => {
    divs.innerHTML += `
        <div class="div">
    
    <img src="${img.value}" alt="img">
    
    <div class="ema">
    <h1> email:${email.value}</h1>
    <h1> name:${name.value}</h1>
    </div>
    <button class="delete">delete</button>
        </div>
        `;
  });
}
task()