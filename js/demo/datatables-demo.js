// Call the dataTables jQuery plugin
$(document).ready(function() {
  var table = $('#dataTable').DataTable();
  console.log("run");
  fetch('http://localhost:8000/user/').then((resp)=> resp.json())
    .then(function(resp){
      for(var k = 0;k < resp.data.length;k++){
        table.row.add([
          resp.data[k].number,
          resp.data[k].nama,
          resp.data[k].alamat,
          resp.data[k].role_name
        ])
      }
    })
});


