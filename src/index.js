// Ваше решение тут

//Вариант 1

const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
box1.addEventListener('click',()=>{
  if (!box1.classList.contains("circle"))
  {
    box1.classList.add("circle")
  } else {
    box1.classList.remove("circle")
  }
 
})
box2.addEventListener('click',()=>{
  if (box2.classList.contains('orange'))
  {
    box2.classList.remove('orange')
    box2.classList.add('blue')
  } else {
    box2.classList.remove('blue')
    box2.classList.add('orange')
  }

})
box3.addEventListener('click',()=>{
  if (box3.classList.contains('green'))
  {
    box3.classList.remove('green')
    box3.classList.add('orange', 'circle')
  } else {
    box3.classList.remove('orange', 'circle')
    box3.classList.add('green')
  }
  
})


//Вариант 2
// const row = document.querySelector(".row")
// row.addEventListener('click',(event)=>{
  
//   if (event.target.id==='box1'){
//     event.target.classList.toggle("circle")
//   } else if (event.target.id==='box2'){
//     event.target.classList.toggle('orange')
//     event.target.classList.toggle('blue')
//   } else if (event.target.id==='box3'){
//     event.target.classList.toggle('green')
//     event.target.classList.toggle('orange')
//     event.target.classList.toggle('circle')
//   }
// })

