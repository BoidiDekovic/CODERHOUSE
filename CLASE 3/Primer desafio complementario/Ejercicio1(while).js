let totalDeAlumnos = 1
let alumnosAprobados = 0
let alumnosDesaprobados = 0
alert("ingresar la nota de 10 alumnos")
while(totalDeAlumnos <= 10){
    let contador = 0 ;
    let alumno  = prompt("Ingresar la nota del alumno numero "+ totalDeAlumnos)
    if(alumno < 7){
        alumnosDesaprobados++
    }else{
        alumnosAprobados++
    }
    totalDeAlumnos++
}
alert("Aprobaron "+alumnosAprobados+" alumnos y desaprobaron " + alumnosDesaprobados + " alumnos") 
console.log("Aprobaron "+alumnosAprobados+" alumnos y desaprobaron " + alumnosDesaprobados + " alumnos")