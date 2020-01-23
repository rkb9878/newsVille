function select(value) {
    // alert(value);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.status == 200 & this.readyState == 4) {
            var output = JSON.parse(this.response);
            // alert(output);
            var s = "<table class='table table-hover'>";
            s += "<thead class='bg-dark text-light'>";
            s += "<th>NewsId</th>";
            s += "<th>News Title</th>";
            // s += "<th>Description</th>";
            s += "<th>Hashtag</th>";
            s += "<th>DateofNews</th>";
            s += "<th>Category Name</th>";
            s += "<th colspan=4 class='text-center'>Action</th>";
            s += "</thead>";
            for (var i = 0; i < output.length; i++) {
                s += "<tr>";
                // s+="<td>"+output[i]['newsid']+"</td>";
                s += "<td>" + (i + 1) + "</td>";
                s += "<td>" + output[i]['newstitle'] + "</td>";
                // s += "<td>" + output[i]['description'] + "</td>";
                s += "<td>" + output[i]['hashtag'] + "</td>";
                s += "<td>" + output[i]['dateofnews'] + "</td>";
                s += "<td>" + output[i]['catname'] + "</td>";
                s += "<td ><button type='button' class='btn btn-danger' onclick='deletenews(" + output[i]["newsid"] + ")'><strong class='fas fa-trash-alt'></strong></button></td> ";
                s += "<td><button type='button' class='btn btn-warning' onclick='editnews(" + JSON.stringify(output[i]) + ")'><strong class='fas fa-edit'></strong></button></td> ";
                s += "<td><a href='addphotos?newsid=" + output[i]["newsid"] + "'><span class='fa fa-images fa-3x'></span></a>";
                s += "<td><a class='text-success' href='insertvideos?newsid=" + output[i]["newsid"] + "'><i class='fab fa-youtube fa-3x'></i></a>";
                s += "</tr>";

            }
            s += "</table>";
            document.getElementById("newstable").innerHTML = s;
        }
    };
    xmlhttp.open('GET', 'viewnews?catname=' + value, true);
    xmlhttp.send();
}

function editnews(obj) {
    $('#id').val(obj.newsid);
    $('#nawscatname').val(obj.catname);
    $('#newstitle').val(obj.newstitle);
    // $('#newsdescription').val(obj.description);
    $('#newshashtag').val(obj.hashtag);
    $("#editnews").modal('show');
}

function editnewsaction() {
    var editdata = new FormData();
    editdata.append('id', document.getElementById('id').value);
    editdata.append('newscatname', document.getElementById('newscatname').value);
    editdata.append('newstitle', document.getElementById('newstitle').value);
    editdata.append('newsdescription', document.getElementById('newsdescription').value);
    editdata.append('newshashtag', document.getElementById('newshashtag').value);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = this.response;
            alert(output);
            window.location.href = "shownews"
        }
    };
    xml.open('POST', 'editdataaction', true);
    xml.send(editdata);
}

function deletenews(id) {
    if (confirm("are you sure to delete?")) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var output = this.response;
                alert(output);
                window.location.href = "shownews"
            }
        };
        xml.open('GET', 'deleteaction?id=' + id, true);
        xml.send();
    }
}