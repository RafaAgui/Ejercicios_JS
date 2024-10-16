function calc() {
    // Obtener los valores de los inputs
    let age = document.getElementById("age").value;
    let retire = document.getElementById("retire").value;
    let year = new Date()

    //convertilos en enteros
    age = parseInt(age)
    retire = parseInt(retire)


    // Crear el mensaje personalizado
    let yearsForRetire = retire - age;
    let yearRetire = year.getFullYear() + yearsForRetire;
    let forRetire = '';
    let forYearRetire = '';

    if (yearsForRetire <= 0) {
        forRetire = `You have ${yearsForRetire} years left until you can retire.`;
        forYearRetire = `It's ${year.getFullYear()}, so you can retire!.`; 
    } else {
        forRetire = `You have ${yearsForRetire} years until you can retire.`;
        forYearRetire = `It's ${year.getFullYear()}, so you can retire in ${yearRetire}.`;
    }

    // Mostrar el mensaje en el HTML
    document.getElementById("greetingAge").textContent = forRetire;
    document.getElementById("greetingYear").textContent = forYearRetire;
}
