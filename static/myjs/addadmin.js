function addadmin() {
    if ($("#addadmin").valid()) {
        var formdata = new FormData();
        formdata.append('email', document.getElementById('email').value);
        formdata.append('password', document.getElementById('password').value);
        formdata.append('type', document.getElementById('type').value);
        formdata.append('mobile', document.getElementById('mobile').value);

        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 & this.status == 200) {
                var output = this.response;
                alert(output);
                $('#myModal').modal('hide');
                admindataview();
            }

        };
        xml.open('POST', 'insertadmin', true);
        xml.send(formdata);

    }
}

function admindataview() {

    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            var output = JSON.parse(this.response);
            var s = "";
            for (var i = 0; i < output.length; i++) {
                s += "<tr>";
                s += "<td>" + (i + 1) + "</td>"
                s += "<td>" + output[i]['email'] + "</td>"
                s += "<td>" + output[i]['type'] + "</td>"
                s += "<td>" + output[i]['mobile'] + "</td>"
                s += "<td ><button type='button' class='btn btn-danger' onclick='deleteadmin(\"" + output[i]['email'] + "\")'><strong class='fas fa-trash-alt'></strong></button></td> ";
                s += "<td><button type='button' class='btn btn-warning' onclick='editadmin(" + JSON.stringify(output[i]) + ")'><strong class='fas fa-edit'></strong></button></td> ";
                s += "</tr>";
            }
        }
        document.getElementById('admindataview').innerHTML = s;

    };
    xml.open('POST', 'viewadmin', true);
    xml.send()


}

function deleteadmin(email)
{
    if (confirm("Do you really want to delete this Administrator ?"))
    {
        var formdata = new FormData;
        formdata.append('email', email);

        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function ()
        {
            if (this.readyState == 4 & this.status == 200) {
                var output = this.response;
                alert(output);
                admindataview();
            }
        };
        xml.open('POST', 'deladmin', true);
        xml.send(formdata);
    }
}

function editadmin(obj)
{
    // alert(obj.type);
    $('#editemail').val(obj.email);
    $('#newtype').val(obj.type);
    $('#editmobile').val(obj.mobile);

    // $('#editemail').val(obj.editemail);
    $('#editadminmyModal').modal('show');

}

function updateadmin() {
    var formdata = new FormData();
    formdata.append('editemail', document.getElementById('editemail').value);
    formdata.append('edittype', document.getElementById('newtype').value);
    formdata.append('editmobile', document.getElementById('editmobile').value);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            var output = this.response;
            alert(output);
            $('#editadminmyModal').modal('hide');
            admindataview();
        }
    };
    xml.open('POST', 'save', true);
    xml.send(formdata);


}