let btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
  let area = document.getElementById("area").value
  area = area.split(" ")
  let count = 0
  for(let item of area){
    if (item !== "") {
      count++
    }
  }
  document.getElementById("result").innerHTML = count
})