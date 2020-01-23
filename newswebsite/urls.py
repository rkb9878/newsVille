"""newswebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path("addadmin",addadmin),
    path('insertadmin',insertadmin),
    path('viewadmin',viewadmin),
    path('deladmin',deladmin),
    path('editadmin',editadmin),
    path('save',save),
    path('adminlogin',adminlogin),
    path('checkadminlogin',checkadminlogin),
    path('admindashboard',admindashboard),
    path('changeadminpassword',changeadminpassword),
    path('adminchangepassword',adminchangepassword),
    path('adminlogout',adminlogout),
    path('addcategory',addcategory),
    path('insertcategory',insertcategory),
    path('showcategory',showcategory),
    path('editcategory',editcategory),
    path('removecategory',removecategory),
    path('savecat',savecat),
    #===============News===============#
    path('addnews',addnews),
    path('insertnews',insertnews),
    path('loginwithajax',loginwithajax),
    path('openajaxpage',openajaxpage),
    path('getsubcat',getsubcat),
    path('shownews',shownews),
    path('viewnews',viewnews),
    path('deleteaction',deleteaction),
    path('editdataaction',editdataaction),
    path('addphotos',addphotos),
    path('insertphotos',insertphotos),
    path('deletenewsphoto',deletenewsphoto),
    path('insertvideos',insertvideos),
    path('insertvideosaction',insertvideosaction),
    path('deletenewsvideo', deletenewsvideo),
    path('readnews',readnews),
    #================User================#
    path('usersignup1', usersignup1),
    path('', index),
    path('contact', contact),
    path('user_signup1',user_signup1),
    path('senduserotp',senduserotp),
    path('checkotp',checkotp),
    path('usersignup2',usersignup2),
    path('register_user',register_user),
    path('checkuserlogin',checkuserlogin),
    path('userlogin',userlogin),
    path('userdashboard',userdashboard),
    path('sendforgotsms',sendforgotsms),
    path('comment',comment),
    path('userlogout',userlogout),
    #=============Author=================#
    path('addauthor',addauthor),
    path('insertauthor',insertauthor),
    path('viewauthor',viewauthor),
    path('delauthor',delauthor),
    path('saveauthor',saveauthor),
    #============Blogs===================#
    path('bolgs',bolgs),
    path('blogs',blogs),
    path('saveblog',saveblog),
    path('viewblog',viewblog),
    path('blogview',blogview),
    path('moreblog',moreblog),
    path('deleteblog',deleteblog),
    path('readblog',readblog),
    path('readblog2',readblog2),
    path('viewauthorblog',viewauthorblog),
    path('find',find),
    path('navexmple',navexmple),
    path('searchcont',searchcont),
    path('searchpage',searchpage),
]
