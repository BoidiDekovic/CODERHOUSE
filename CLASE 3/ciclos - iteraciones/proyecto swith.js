
let invitados  = ""
let cantidadInvitados = 0

do {
    let menu = prompt("1-Ingresar un invitado                2- ver los invitados cargados          3-Salir")
switch (menu) {
    
    case "1":
        cantidadInvitados = prompt("cuantos invitados desea ingresar?")
        for (let contador = 1; contador <= cantidadInvitados; contador++ ) {
            let invitados = prompt("Ingrese el nombre del invitado: ")
            invitados = invitados + "" + invitados  
        }
        menu = prompt("1-Ingresar un invitado                2- ver los invitados cargados          3-Salir")
        break;
    case "2": 
        alert("Los invitados son:  " + invitados )
        break;
    case "3":
        alert("gracias por usar nuestra pagina")
        break;
    }
}while(menu =! 3 );
    
