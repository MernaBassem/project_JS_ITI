var name_input = document.getElementById("name");
var name_span = document.getElementsByClassName("name");
var email_input = document.getElementById("email");
var email_span = document.getElementsByClassName("email");
var pass_input = document.getElementById("pass");
var pass_span = document.getElementsByClassName("pass");
var message_input = document.getElementById("message");
var message_span = document.getElementsByClassName("message");


document.addEventListener('scroll', () => {
    var a  =document.getElementById('link');
    if (window.scrollY > 150){
        a.classList.add("scrolled");
    }
    else{
        a.classList.remove("scrolled"); 
    }
})





function inputName(){
    if (name_input.value.length <4){
        name_input.style.border = "2px red solid";
        name_input.style.outline = "2px red solid";
        name_span[0].style.display="block";
    }
    else{
        name_input.style.border = "2px  #ff305b solid";
        name_input.style.outline = "2px  #ff305b solid";
        name_span[0].style.display="none" 
    }
}


var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function inputEmail(){
    if (email_input.value.match(validRegex)){
        email_input.style.border = "2px #ff305b solid";
        email_input.style.outline = "2px  #ff305b solid";
        email_span[0].style.display = "none";
        return true;
    }
    else{
       email_input.style.border = "2px red solid";
        email_input.style.outline = "2px red solid";
        email_span[0].style.display = "block";
        return false;
    }
}

function inputPassword(){
    if (pass_input.value.length <8 ){
        pass_input.style.border = "2px red solid";
        pass_input.style.outline = "2px red solid";

        pass_span[0].style.display="block"
    }
    else{
        pass_input.style.border = "2px  #ff305b solid";
       pass_input.style.outline = "2px  #ff305b solid";
       
        pass_span[0].style.display="none" 
    }
}

function inputMessage(){
    if (message_input.value.length <5){
        message_input.style.border = "2px red solid";
        message_input.style.outline = "2px red solid";
        message_span[0].style.display="block";
    }
    else{
        message_input.style.border = "2px  #ff305b solid";
        message_input.style.outline = "2px  #ff305b solid";
        message_span[0].style.display="none" 
    }
}


function validate(){  
    var value_name = name_input.value;
    var value_pass = pass_input.value;
var value_mess=message_input.value;

    var value_email = email_input.value.match(validRegex);
if (value_name==null ||value_name=="" || value_name.length < 4){  
        name_input.style.border = "2px red solid";
        name_input.style.outline = "2px red solid";
        name_span[0].style.display="block"; 
    event.preventDefault();

}
else if (value_email==false || email_input.value=="" || email_input.value==null){
    email_input.style.border = "2px red solid";
    email_input.style.outline = "2px red solid";
    email_span[0].style.display = "block";
    event.preventDefault();

}
else if(value_pass.length<8){  
            pass_input.style.border = "2px red solid";
            pass_input.style.outline = "2px red solid";
            pass_span[0].style.display="block"
            // name_input.style.border = "2px green solid";
            // name_input.style.outline = "2px green solid";
            // name_span[0].style.display = "none";
    event.preventDefault();

  }  


else if (value_mess==null ||value_mess=="" || value_mess.length < 5){  
    message_input.style.border = "2px red solid";
    message_input.style.outline = "2px red solid";
    message_span[0].style.display="block"; 
event.preventDefault();

}


} 