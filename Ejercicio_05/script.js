function calc() {
    // Obtener los valores de los inputs
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    //convertilos en enteros
    first = parseInt(first)
    second = parseInt(second)


    // Crear el mensaje personalizado
    let suma = first + second;
    let resta = first - second;
    let multiplicacion = first * second;
    let division = first / second;
    const mensaje = `${first} + ${second} = ${suma}\n
        ${first} - ${second} = ${resta}\n
        ${first} * ${second} = ${multiplicacion}\n
        ${first} / ${second} = ${division} `;

    // Mostrar el mensaje en el HTML
    document.getElementById("greeting").textContent = mensaje;
}
