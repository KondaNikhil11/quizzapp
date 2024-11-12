let btn = document.getElementById("txtbox");

btn.addEventListener('focus', focusfun);

function focusfun(){
 btn.style.backgroundColor="pink";
 btn.style.color="black";
}

const srch = document.getElementById("srhbtn");

srch.addEventListener('click', themechange);

function themechange(e){
     console.log(e);
     document.body.style.backgroundColor="white";
}



// document.addEventListener('DOMContentLoaded', function() {
//      // Get references to the elements
//      let txtbox = document.getElementById("txtbox");
//      let srhbtn = document.getElementById("srhbtn");
 
//      // Add event listener for focus on the text box
//      txtbox.addEventListener('focus', function() {
//          txtbox.style.backgroundColor = "pink"; // Change background color to pink on focus
//      });
 
//      // Add event listener for click on the search button
//      srhbtn.addEventListener('click', function() {
//          document.body.style.backgroundColor = "pink"; // Change body background color to white on button click
//      });
//  });

const theme = document.getElementById("theme");

theme.addEventListener("click", themes);

function themes(){
     var letters = "0123456789ABCDEF";
     var color ="#";
      
     for(var i=0; i<6; i++){
          var rand = Math.floor(Math.random() * 16) ;  
          color = color+letters[rand]; 
     }
     console.log(color);
     document.body.style.background=color;
}

const email = document.getElementById("email");
const form = document.getElementById("form")

submit.addEventListener('submit', (e)=>{
        e.preventDefault()
        validate()
});

function validate(){
     let useremail = email.value.trim()

     if(useremail === ''){
          setError(email, 'invalid')
     }
     else{
          setSuccess(email);
     }
}