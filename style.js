
const output = document.getElementById("advice-text");
const btn = document.getElementById("dice")
const adviceId= document.getElementById('adviceId')




let genrateAdvice = ()=>{
  output.classList.remove("fade")
fetch("https://api.adviceslip.com/advice")
.then(data=>{
  return data.json()})
.then(item => {
output.innerHTML  = `${item.slip.advice}`
adviceId.innerHTML =`# ${item.slip.id}`
output.classList.add("fade")
})
.catch(err=>{
  output.innerHTML = "unidentify error try again:", err;
})

}
btn.addEventListener('click',genrateAdvice)