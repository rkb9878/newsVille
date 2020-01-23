function hide_otp()
{
    document.getElementById("hideform").style.display="none";
}
function forgetpass()
{
    $("#forget").modal("show")
}
function senduserotp()
{
   if($("#otpsend").valid())
   {
       var otpmobile = document.getElementById("otpmobile").value;
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function ()
       {
           if(this.readyState == 4 & this.status == 200){
               var output = this.response;
               {
                   alert(output);
               }
               document.getElementById('hideform').style.display = 'block'
           }
       };
       xmlhttp.open('GET', 'senduserotp?otpmobile=' +otpmobile);
       xmlhttp.send()

   }
}

function verifyotp()
{
    if ($("#hideform").valid()) {
        var usermobile = document.getElementById("otpmobile").value;
        var otp = document.getElementById("otp").value;
        // alert(otp);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.response;
                // alert(response);
                if (response == "success") {
                    window.location.href = "usersignup2?mobile=" + usermobile;
                }
                else if(response == "failed"){
                    alert("OTP sending failed......")
                }
            }
        };
        xmlhttp.open('GET', 'checkotp?otp=' + otp);
        xmlhttp.send()
    }
}

function registeruser()
{
    if($("#registeruser").valid())
    {
        var formdata = new FormData();
        formdata.append('usermobile',document.getElementById('usermobile').value);
        formdata.append('useremail',document.getElementById('useremail').value);
        formdata.append('username',document.getElementById('username').value);
        formdata.append('userpassword',document.getElementById('userpassword').value);
        formdata.append('confirmpassword',document.getElementById('confirmpassword').value);
        formdata.append('useraddress',document.getElementById('useraddress').value);
        formdata.append('userstate',document.getElementById('userstate').value);
        formdata.append('userphoto',document.getElementById('userphoto').files[0]);

        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function ()
        {
           if(this.readyState == 4 & this.status == 200)
           {
               var output = this.response;
               if(output == 'success')
               {
                   window.location.href = "userlogin";
               }
               else if(output == "duplicate")
               {
                  document.getElementById('ans').innerHTML = "<h3>Duplicate User</h3>"
               }
           }
        };
        xml.open('POST','register_user',true);
        xml.send(formdata);

    }
    
}

function userchecklogin()
{
    if($("#form1").valid())
    {
        var formdata = new FormData();
        formdata.append('useremail',document.getElementById('useremail').value);
        formdata.append('userpassword1',document.getElementById('userpassword1').value);
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function ()
        {
            if(this.readyState == 4 & this.status == 200)
            {
                var output = this.response;
                if(output == 'success'){
                    window.location.href = "/";
                }
                else if(output == "failed"){
                    document.getElementById('ans').innerHTML = "<h3 style='color: red'>Invalid Credentials</h3>"
                }
            }
        };
        xml.open('POST','checkuserlogin',true);
        xml.send(formdata);
    }
}

function forgotsms()
{
    if($("#userforgot").valid()){
        var email=document.getElementById('smsemail').value;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if(this.readyState == 4 & this.status == 200){
                var output = this.response;
                document.getElementById('msg').innerHTML = output;
            }

        };
        xmlhttp.open('GET','sendforgotsms?email='+email,true);
        xmlhttp.send()
    }
}