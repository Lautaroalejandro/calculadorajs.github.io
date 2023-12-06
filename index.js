

function sumar(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
}

function restar(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
}

function multiplicar(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA * numeroB
    alert(numeroA + " * " + numeroB + " = " + resultado)
}

function dividir(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
}






let opcion = parseInt(prompt("elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))


while(opcion !== 5){
   


switch(opcion){
    case 1:
        sumar()
        break;
    case 2:
        restar()
        break;
    case 3:
        multiplicar()
        break;
    case 4:
        dividir()
        break;
    default:
        alert("opcion incorrecta")
        break;
    }
    opcion = parseInt(prompt("elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

}

alert("Finalizando programa, enter para cerrar")


