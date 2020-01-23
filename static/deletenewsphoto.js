function deletecategory(categoryname){
    var xml=new XMLHttpRequest();
    xml.onreadystatechange=function () {
        if (this.readyState==4 && this.status==200){
            var output=this.response;

        }
    };
    xml.open('GET','removecategory?catname='+categoryname,true);
    xml.send();
}