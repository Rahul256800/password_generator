var password =document.getElementById("password");
function genpassword(){
    var chars=
    "0123456789!@#$%^&*()_+=-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength=5;
    var password="";
    for(var i=0;i<=passwordLength;i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber +1);
    }
    // now applying it
    document.getElementById("password").value = password;
    //copy button
    function samepassword(){
        var copyText = document.getElementById("password");
    
       /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.getElementById("copied").textContent = "Password copied: " + copyText.value;
    }
}