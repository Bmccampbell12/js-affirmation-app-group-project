onReady();

function onReady() {
  console.log('Javascript is working!');
}

let tableBody = document.getElementById("table") ;
let emojiDiv = document.getElementById("emojiDiv")
function makeFire(){
  emojiDiv.innerHTML += "<span onClick= deleteFire()>🔥</span>"
}

function makeIce(){
  emojiDiv.innerHTML += "<span onClick= deleteIce()>❄️</span>"
}

function deleteAffirmation(event){
  let parentRow = event.target.parentElement
  parentRow.remove()
}

// delete function should be used along with 

function submitText(){
  let deleteButton = `<td onClick="deleteAffirmation(event)">❌</td>`
  let formAffirmation = document.getElementById("affirmation").value  
  let formAuthor = document.getElementById("Author").value   
  tableBody.innerHTML +=   `<tr><td>${formAffirmation}</td><td>${formAuthor}</td>${deleteButton}</tr>`
  event.preventDefault();
} 
