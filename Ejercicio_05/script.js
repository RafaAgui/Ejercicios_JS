function calc() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    first = parseInt(first)
    second = parseInt(second)

    let suma = first + second;
    let resta = first - second;
    let multiplicacion = first * second;
    let division = first / second;
    let result = `${first} + ${second} = ${suma},
        ${first} - ${second} = ${resta},
        ${first} * ${second} = ${multiplicacion},
        ${first} / ${second} = ${division} `;

    document.getElementById("greeting").textContent = result;
}
