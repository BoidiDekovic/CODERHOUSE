//FALTA RESOLVER SI EL PROMEDIO DE APROBADOS DA NAN POR CARACTER O ESPACIO

let totalDeAlumnos = 1
let alumnosAprobados = 0
let alumnosDesaprobados = 0
let promedioAprobados = 0
let promedioDesaprobados = 0
alert("ingresar la nota de 10 alumnos")
while(totalDeAlumnos <= 10){
    let contador = 0 ;
    let alumno  = parseInt(prompt("Ingresar la nota del alumno numero "+ totalDeAlumnos));
    if(isNaN(alumno)){
        alert("ingrese un numero")
        totalDeAlumnos = totalDeAlumnos - 1
        alumnosAprobados = alumnosAprobados - 1
    }
    if(alumno > 10){
        alert("la nota ingresada es incorrecta")
        totalDeAlumnos = totalDeAlumnos - 1
        alumnosAprobados = alumnosAprobados - 1
        promedioAprobados = promedioAprobados - alumno
    }
    if(alumno < 7){
        promedioDesaprobados = promedioDesaprobados + alumno
        alumnosDesaprobados++
        
    }else{
        promedioAprobados = promedioAprobados + alumno
        alumnosAprobados++
    }
    totalDeAlumnos++
}
 promedioAprobados = promedioAprobados / alumnosAprobados
 promedioDesaprobados = promedioDesaprobados / alumnosDesaprobados 


alert("Aprobaron "+alumnosAprobados+" alumnos y desaprobaron " + alumnosDesaprobados + " alumnos") 
console.log("Aprobaron "+alumnosAprobados+" alumnos y desaprobaron " + alumnosDesaprobados + " alumnos")
alert("el promedio de los alumnos aprobados es " +promedioAprobados + " y el promedio de los alumnos desaprobados es " + promedioDesaprobados)
console.log("el promedio de los alumnos aprobados es: " +promedioAprobados + "y el promedio de los alumnos desaprobados es: " + promedioDesaprobados)