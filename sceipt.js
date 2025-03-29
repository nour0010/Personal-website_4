let circle_picture=document.getElementsByClassName('circle-picture')[0];
let My_picture=document.getElementsByClassName('My_picture')[0];
let My_information=document.getElementsByClassName('My_information')[0];
let Who_am_I=document.getElementsByClassName('Who_am_I')[0];
let aboutdiv=document.getElementsByClassName('about')[0];
let MyWorksdiv=document.getElementsByClassName('MyWorks')[0];
console.log(circle_picture ,My_picture,My_information)

function about(){
    My_picture.style.opacity= "0";
    My_information.style.opacity= "0";
    MyWorksdiv.style.opacity= "0";
    aboutdiv.style.opacity= "1";
    setTimeout(() => {
       Who_am_I.style.display="none";
        aboutdiv.style.display="flex";
         MyWorksdiv.style.display="none";
       
     }, 500);
}
function MyWorks(){
    My_picture.style.opacity= "0";
    My_information.style.opacity= "0";
   aboutdiv.style.opacity= "0";
   MyWorksdiv.style.opacity= "1";
   
   setTimeout(() => {
      Who_am_I.style.display="none";
      aboutdiv.style.display="none";
      MyWorksdiv.style.display="flex";
    }, 500);
}
function home() {
    My_picture.style.opacity= "1";
    My_information.style.opacity= "1";
    Who_am_I.style.opacity= "0";
    MyWorksdiv.style.opacity= "0";
    aboutdiv.style.opacity= "0";
    setTimeout(() => {
        aboutdiv.style.display="none";
        MyWorksdiv.style.display="none";
        Who_am_I.style.display="flex";
      }, 500);
    }