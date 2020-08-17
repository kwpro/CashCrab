setTimeout(function(){ 
    // window.location.replace("./template.html");
    var login = false
    if(login) {
        window.location.href = './home.html';
    } else {
        window.location.href = './login.html';
    }
}, 3000);