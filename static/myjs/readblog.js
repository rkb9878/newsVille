function readblog(searchfor) {
    // alert(searchfor);
    var s="";
    for(var i=0; i<searchfor.length;i++){
        s+="<div class='bg-white row mb-3 pt-2 pb-2' style=''>";

        s+="<div class='col-sm-2'>";
        s+='<img src="static/media/'+searchfor[i]['photo']+'" alt="" height="150" width="100"></div>';
        s+='<div class=" text-left col-sm-9">';
        s+='<div>';
        s+='<span class="font-weight-bold h5"><a href="readblog2?blogid='+searchfor[i]['blogid']+'">'+searchfor[i]['title']+'</a></span>';
        s+='</div><div>';
        s+='<span class=""><strong class="h5">Author:</strong>'+searchfor[i]['name']+'</span></div><div>';
        s+='<span class=""><strong class="h5">Date Of Publish:</strong>'+searchfor[i]['dateofpublish']+'</span></div></div>';
        s+='</div>'
    }
    console.log(s);
    document.getElementById("readblogid").innerHTML=s;
}

function viewauthorblog(aid) {
    var xml=new XMLHttpRequest();
    xml.onreadystatechange=function () {
      if (this.status==200 && this.readyState==4){
          var output=JSON.parse(this.response);
          readblog(output);
      }
    };
    xml.open('GET','viewauthorblog?aid='+aid,true);
    xml.send()
}