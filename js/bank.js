document.getElementById('submit-btn').addEventListener("click", function(){
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    

    const emailField = document.getElementById('email');
    const email = emailField.value;
     
    if(email === "toukira@himu.com" && password === "secret"){
       window.location.href = 'money.html';
    }
    else{
        alert('something went wrong')
    }
})