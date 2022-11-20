list = []
   ipt = document.querySelectorAll("input")
document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault()
  if(ipt[3].value == "Editar"){
    putTask();
    return;
  }
  data = new FormData(e.target)
objData = Object.fromEntries(data.entries())
    console.log("Salvados ", objData);
  list.push(objData)

  
  console.log("list", list.length);
  localStorage.setItem("data",JSON.stringify(list).toString())
  console.log("local", JSON.parse(localStorage.getItem("data")))
  datas = [];
for (let [el, obj] of JSON.parse(localStorage.getItem("data")).entries()) {
    console.log(`Salvar ${obj}`);
  datas.push(`<tr><td>${obj.task}</td><td>${obj.status != false && obj.status != undefined ?"🤓":"🧐"}</td> <td><button onclick="getTask(${el})">✏️
</button></td></tr>`)
}
  document.getElementById('dtable').innerHTML = datas.toString().replaceAll(",","")
  document.querySelector("form").reset()
    ipt[3].value == "Editar" ? ipt[3].value = "Salvar" : "Salvar"
})

function getTask(t) {
  objt = JSON.parse(localStorage.getItem("data"))[t]

ipt[0].value = objt.task
  ipt[1].checked = objt.status == "on" || objt.status == true ? true : false
  ipt[2].value = t
  ipt[3].value = "Editar"
  console.log(JSON.parse(localStorage.getItem("data"))[t]);
}

function putTask() {
   t = document.getElementById('id').value;
arr = JSON.parse(localStorage.getItem("data"))
arr[t].task = ipt[0].value
  arr[t].status = ipt[1].checked
list[t].task = ipt[0].value
  list[t].status = ipt[1].checked
localStorage.setItem("data",JSON.stringify(arr).toString())
  datas = []
  for (let [el, obj] of JSON.parse(localStorage.getItem("data")).entries()) {
    console.log(`Salvar ${obj}`);
  datas.push(`<tr><td>${obj.task}</td><td>${obj.status != false && obj.status != undefined?"🤓":"🧐"}</td> <td><button onclick="getTask(${el})">✏️</button></td></tr>`)
}
  document.getElementById('dtable').innerHTML = datas.toString().replaceAll(",","")
  ipt[3].value == "Editar" ? ipt[3].value = "Salvar" : "Salvar"
  document.querySelector("form").reset()
}


function delTask() {
t = document.getElementById('id').value;
  console.log("del",t);
arr = JSON.parse(localStorage.getItem("data"))
arr.splice(t, 1)
list.splice(t, 1)
    console.log("delet",arr);
localStorage.setItem("data",JSON.stringify(arr).toString())
  datas = []
  for (let [el, obj] of JSON.parse(localStorage.getItem("data")).entries()) {
    console.log(`Salvar ${obj}`);
  datas.push(`<tr><td>${obj.task}</td><td>${obj.status != false && obj.status != undefined?"🤓":"🧐"}</td> <td><button onclick="getTask(${el})">✏️</button></td></tr>`)
}
  document.getElementById('dtable').innerHTML = datas.toString().replaceAll(",","")
  ipt[3].value == "Editar" ? ipt[3].value = "Salvar" : "Salvar"
  document.querySelector("form").reset()
}
