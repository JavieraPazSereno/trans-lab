//funciones Page 1
validarMail = () => {
    var emailUser = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(emailUser)) {
      alert('email valido ' + emailUser);
    } else {
      alert('email incorrecto ' + emailUser);
    }
}

function validarNum(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

function validarLargo() {
    var claveUser = document.getElementById('clave').value
    if(claveUser.length <= 8){
        alert('clave ok!');
        return true
    }
    else{
        alert('clave incorrecta,debe contener máx 8 números');
        return false;
    }
}

function iniciarSesion() {
    window.location = ("index2.html");
}
 

//Funciones Page 2
function page3() 
{ 
    window.location = ("index3.html"); 
} 

function page4()
{
    window.location = ("index4.html"); 
}
function page5()
{
    window.location = ("index5.html"); 
}




//funciones Page 3

const inputNumTarjeta = document.getElementById("numeroTarjeta").value;
const containerSaldo = document.getElementById("saldo")
inputText.addEventListener("click", (event) => {
        let saldo = inputNumTarjeta.value;
        inputNumTarjeta.value = ""; 

        fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    })


