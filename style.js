
const output = document.getElementById("advice-text");
const btn = document.getElementById("dice")
const adviceId= document.getElementById('adviceId')



btn.addEventListener('click', ()=>{
fetch("https://api.adviceslip.com/advice")
.then(data=>{
  return data.json()})
.then(item => {
output.innerHTML  = `${item.slip.advice}`
adviceId.innerHTML =`# ${item.slip.id}`
})
})