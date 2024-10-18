function calc() {
    let persons = document.getElementById("persons").value;
    let pizzas = document.getElementById("pizzas").value;
    const porciones = 8;

    persons = parseInt(persons)
    pizzas = parseInt(pizzas)

    const totalPocions = pizzas * porciones;
    const pieces =  totalPocions / persons;
   console.log(totalPocions, pieces)

    let rest = totalPocions % persons;

    document.getElementById("data").textContent = ` ${persons} para ${pizzas} pizzas.`;
    document.getElementById("pieces").textContent = pieces;
    document.getElementById("rest").textContent = rest;
}
