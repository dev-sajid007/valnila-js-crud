
// fetch('http://fooddoose.blancebd.com/api/categories')
//   .then(response => response.json())
//   .then(data => data.data.map((item) => {
        
//     console.log(item.name);
//     document.getElementById('h1').innerHTML=JSON.parse(item.name[0]);
// }));

function onSubmit(){

  var formData = readData();
  insertRow(formData)
}


function readData(){

  var formData = {};

  formData['name'] = document.getElementById('name').value;
  formData['email'] = document.getElementById('email').value;
  formData['phone'] = document.getElementById('phone').value;

  return formData;
}


function insertRow(data){
  var table = document.getElementById('empList').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;

  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;

  

}