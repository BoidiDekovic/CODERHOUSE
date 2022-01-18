
for (let counter = 0 ;  counter < 5 ; counter++) {
    let alumno = prompt("Ingrese un alumno: " )
    console.log("Bienvenido " + alumno)
}

////////////////////////////////////////////////////////

let edad = prompt("Ingrese su edad: ")
while (edad < 18 ){
    alert("Usted es menor no puede ingresar")
    edad = prompt ("Ingrese su edad");
}

/////////////////////////////////////////////////////////

do {
    pass = prompt("Ingrese su contraseña: ")
    if(pass == 123){
        alert("Bienvenido")
    }else{
        alert("Acceso Denagado!")
    }
} while (pass != 123);