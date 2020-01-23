function viewblog() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if(this.readyState == 4 & this.status == 200){
            var output = JSON.parse(this.response);
            var s = "";
            for(var i = 0; i<output.length; i++){
                s +="<tr>";
                s +="<td>"+output[i]['author id']+"</td>";
                s +="<td>"+output[i]['blog title']+"</td>";
                s +="<td>"+output[i]['date of publish']+"</td>";
                s +="</tr>";
            }
        }
        console.log(s);
        document.getElementById('viewblog').innerHTML = s;
    };
    xxml.open('GET','blogview', true);
    xml.send();

}