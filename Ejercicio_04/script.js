function saludar() {
    // Obtener los valores de los inputs
    const noum = document.getElementById("noum").value;
    const verb = document.getElementById("verb").value;
    const adjetive = document.getElementById("adjetive").value;
    const adverb = document.getElementById("adverb").value;

    // Crear el mensaje personalizado
    const mensaje = `Do you ${verb} your ${adjetive} ${noum} ${adverb}?, That's funny!`;

    // Mostrar el mensaje en el HTML
    document.getElementById("greeting").textContent = mensaje;
}
