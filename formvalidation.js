let form=document.getElementById("form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let errormessages=document.getElementById("errormessages");

form.addEventListener("submit", e =>{
    let message=[];
    e.preventDefault();
    if(username.value==="" || username.value===null){
        message.push("username is required");
        username.style.border="1px solid red"
    }
    if(password.value=== "" || username.value===null){
        message.push("password is required");
        password.style.border="1px solid red"
    }
    if(password.value.length < 6){
        message.push("password should be greater than 6 characters");
        password.style.border="1px solid red"
    }
     
    if(message.length > 0 ){
         errormessages.innerHTML = message.join(" ");
    }
         else{
         errormessages.innerHTML=""
         console.log("username:"+username.value);
         console.log("password:"+password.value);
         }
});

username.addEventListener("keyup",e =>{
    let value=e.target.value;
    if(value >0){
           username.style.border="1px solid green"
    }
    else{
        username.style.boder="1px solid green"
    }
})