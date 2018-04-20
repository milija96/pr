
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n){
//     showDivs(slideIndex +=n);
// }

// function showDivs(n){
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if(n > x.length) {slideIndex = 1}
//     if(n < 1) {slideIndex = x.length};
//     for(i=0; i < x.length;i++){
//         x[i].style.display = "none";
//     }
//     x[slideIndex -1].style.display = "block";
// }
var myImage = document.querySelector('#im');

myImage
window.onload = function(){ 
    var myImage = document.querySelector('#im');
    myImage.onclick = function(){
        var mySrc = this.getAttribute('src');
        if(mySrc === '1.jpg'){
            myImage.setAttribute('src','2.jpg');
        }else{
            myImage.setAttribute('src', '1.jpg');
        }
    }
    var myHeading = document.querySelector('#text');
    var myButton = document.querySelector('#buttonOne');
    function setUserName(){
        var myName = prompt('Please enter your name');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozila is cool' +myName;
    }
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'My name is: ' +storedName;
    }
    myButton.onclick = function(){
        setUserName();
    }
    var table=this.document.getElementById('table');
    var tableAttrs = table.attributes;
    for(var i = 0;i < tableAttrs.length; i++){
        if(tableAttrs[i].nodeName.toLowerCase() == "border")
        table.border = "1";
    }
    // var box = this.document.querySelector("#badBox")
    //     function mouseO(object) {
    //         object.innerHTML = 'The box has been clicked'
    //     }
    //     function mouseL(object) {
    //         object.innerHTML = 'Hoveringgg'
    //     }
};
// $(document).ready(function(){
//     $("#badBox").onclick()
// })