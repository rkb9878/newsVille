var loadFile = function (event) {
    var image = document.getElementById('editcatphoto').src = URL.createObjectURL(event.target.files[0]);
};

function addcategory() {
    if ($("#addcategory").valid()) {
        var formdata = new FormData();
        formdata.append('catname', document.getElementById('catname').value);
        formdata.append('description', document.getElementById('description').value);
        formdata.append('photo', document.getElementById('photo').files[0]);


        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 & this.status == 200) {
                var output = this.response;
                alert(output);
                $('#myModal').modal('hide');
                categorydataview();
            }

        };
        xml.open('POST', 'insertcategory', true);
        xml.send(formdata);
    }

}

function categorydataview() {
    // alert("hello");
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            var output = JSON.parse(this.response);
            var s = "";
            for (var i = 0; i < output.length; i++) {
                s += "<tr>";
                s += "<td>" + output[i]['catname'] + "</td>"
                s += "<td>" + output[i]['description'] + "</td>"
                s += "<td> <img src='static/media/" + output[i]['photo'] + "' width='100'></td>";
                s += "<td ><button type='button' class='btn btn-danger' onclick='deletecategory(\"" + output[i]['catname'] + "\")'><strong class='fas fa-trash-alt'></strong></button></td> ";
                s += "<td><button type='button' class='btn btn-warning' onclick='editcategory(" + JSON.stringify(output[i]) + ")'><strong class='fas fa-edit'></strong></button></td> ";
                s += "</tr>";
            }
        }
        document.getElementById('categorydataview').innerHTML = s;
    };
    xml.open('GET', 'showcategory', true);
    xml.send();
}

function editcategory(obj) {
    $('#editcatname').val(obj.catname);
    $('#editcatdescription1').val(obj.description);
    $('#editcatphoto').attr('src', 'static/media/' + obj.photo);
    $('#editcatmyModal').modal('show');
}

function savecategory() {
    var formdata = new FormData();
    formdata.append('editcatname', document.getElementById('editcatname').value);
    formdata.append('editcatdescription1', document.getElementById('editcatdescription1').value);
    formdata.append('editphoto', document.getElementById('editphoto').files[0]);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            var output = this.response;
            alert(output);
            $('#editcatmyModal').modal('hide');
            categorydataview();
        }
    };
    xml.open('POST', 'savecat', true);
    xml.send(formdata);
}


function deletecategory(catname) {
    if (confirm("Do you really want to delete this Category ?")) {
        var formdata = new FormData;
        formdata.append('catname', catname);
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 & this.status == 200) {
                var output = this.response;
                categorydataview();
                alert(output);


            }
        };
        xml.open('POST', 'removecategory', true)
        xml.send(formdata);
    }
}


