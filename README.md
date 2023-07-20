# [🔗 GUVI Day 43 task] Password-Reset application

## 🔗Created task deployed on below link :

<a href="https://password-reset-87fo.onrender.com/" target="_blank">https://password-reset-87fo.onrender.com/</a>

## 🔗for getting all users data with  restriction

get method: </br>
https://password-reset-87fo.onrender.com/

## 🔗for getting all users /all details with password

get method: </br>
Format: URL/users </br>
https://password-reset-87fo.onrender.com/users </br>


## 🔗Create new user

post method: </br>
Format: URL/createuser </br>
https://password-reset-87fo.onrender.com/createuser</br>
body: </br>
{
    "name":"Boobathi",
    "email":"tctakboobathi@gmail.com",
    "password":"123456"
}

## 🔗Password Reset- email link send

put method: </br>
Format: URL/forgotpassword </br>
https://password-reset-87fo.onrender.com/forgotpassword </br>

body: </br>
{
    "email":"tctakboobathi@gmail.com"    
}
</br>
Nodemailer used to send password to user mail-id</br>
Node mailer link format = Frontend source code url/passwordreset/random string </br>

link=`https://lovely-figolla-4dd39a.netlify.app/passwordreset/${randomString}`;

## 🔗Password Reset and update

put method: </br>
Format: URL/passwordreset/:id </br>
https://password-reset-87fo.onrender.com/passwordreset/u7na4e9wglg8vtjtg74a </br>

https://lovely-figolla-4dd39a.netlify.app/passwordreset/u7na4e9wglg8vtjtg74a

body: </br>
{
    "password":"asdfg"    
}
</br>
----------------------------------------------Password updation completed--------------------------------------------