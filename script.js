var text = document.getElementById("kunu");
function change() {
  console.log("Button clicked");
  //step1
  var xhttp = new XMLHttpRequest();
  // step2
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  // step3
  xhttp.send();
  // step 4
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      let val = "";
      for (var i = 0; i < json.length; i++) {
        val += `<table>
    <tr>
    <td>${json[i].id}</td>
    <td>${json[i].name}</td>
    <td>${json[i].email}</td>
     <td>${json[i].address.street}</td>
    </tr>
    </table>`;
        document.getElementById("table").innerHTML = val;
      }
    }
  };
}
