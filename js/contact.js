const mail = "gabrielcchelariu@gmail.com";
const phone = "+40 732 561 703";

function copyMail(){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = mail;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied email in clipboard: " + mail)
}

function copyPhone(){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = phone;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied phone in clipboard: " + phone)
}