const acount = document.getElementsByClassName("form-control input-normal");
const pass = document.getElementById("Password");
const pin = document.getElementsByClassName("btn btn-primary btn-lg");
console.log(pin);
console.log(acount);
console.log(pass);
acount[0].value = "109B13380";
pass.value = "123456789";
pin[0].click();
