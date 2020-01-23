var  loadFile = function (event) {
    var image = document.getElementById('editphoto').src = URL.createObjectURL(event.target.files[0])
};
function addauthor() {
    if($("#addauthor").valid()){
        var formdata = new FormData();
        formdata.append('name',document.getElementById('name').value);
        formdata.append('photo',document.getElementById('photo').files[0]);
        formdata.append('type',document.getElementById('type').value);
        formdata.append('description',document.getElementById('description').value);

        var xml = new XMLHttpRequest();
         xml.onreadystatechange = function () {
            if (this.readyState == 4 & this.status == 200) {
                var output = this.response;
                alert(output);
                document.getElementById("addauthor").reset();
                $('#authorModal').modal('hide');
                authordataview();
            }

        };
        xml.open('POST', 'insertauthor', true);
        xml.send(formdata);

    }

}
function authordataview() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            var output = JSON.parse(this.response);
            var s = "";
            for(var i = 0; i<output.length; i++){
                s +="<tr>";
                 s +="<td hidden>"+output[i]['id']+"</td>";
                s +="<td>"+output[i]['name']+"</td>";
                s +="<td><img src='static/media/"+output[i]['photo']+"' width='200px' height='200px'></td>";
                s +="<td>"+output[i]['description']+"</td>";
                s +="<td>"+output[i]['type']+"</td>";
                s += "<td ><button type='button' class='btn btn-danger' onclick='deleteauthor(" + output[i]['id'] + ")'><strong class='fas fa-trash-alt'></strong></button></td> ";
                s += "<td><button type='button' class='btn btn-warning' onclick='editauthor(" + JSON.stringify(output[i]) + ")'><strong class='fas fa-edit'></strong></button></td> ";
                s += "<td><a href='blogview?aid="+output[i]['id']+"' type='button' class='btn btn-primary'><strong class='fas fa-eye'></strong></a></td> ";
                s +="</tr>"
            }
        }
        document.getElementById('authordataview').innerHTML = s;
    };
    xml.open('GET', 'viewauthor', true);
    xml.send()

}

function deleteauthor(id) {
    if(confirm("Do you really want to delete this author?")){
        $('#deletemodal').modal('show');
        var formdata = new FormData();
        formdata.append("id",id);
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if(this.readyState == 4 & this.status == 200){
                var output = this.response;
                $("#dele").removeClass('spinner-border');
                document.getElementById('dele').innerHTML=output;
                authordataview();
            }
        };
        xml.open('POST',"delauthor",true);
        xml.send(formdata);
    }

}

function editauthor(obj)
{
    $('#id').val(obj.id);
    $('#editname').val(obj.name);
    $('#editdesc').val(obj.description);
    $('#edittype').val(obj.type);
    // alert(obj.type);
    $('#editautphoto').attr('src','static/media/'+obj.photo);
    $('#photoname').val(obj.photo);
    // alert('static/media/'+obj.photo);
    $('#editauthormodal').modal('show');
}

function saveauthor() {
    var formdata = new FormData();
    formdata.append("id",document.getElementById('id').value);
    formdata.append('editname',document.getElementById('editname').value);
    formdata.append('edittype',document.getElementById('edittype').value);
    formdata.append('editdesc',document.getElementById('editdesc').value);
    // alert(document.getElementById('editautphoto'));
    formdata.append('editphoto',document.getElementById('editphoto').files[0]);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if(this.readyState == 4 & this.status == 200){
            var output = this.response;
            alert(output);
            $('#editauthormodal').modal('hide');
            authordataview();
        }
    };
    xml.open('POST','saveauthor',true);
    xml.send(formdata);
}

function authorblog() {


}