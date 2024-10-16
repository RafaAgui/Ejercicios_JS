function quote() {
    const noum = document.getElementById("noum").value;
    const verb = document.getElementById("verb").value;
    const adjetive = document.getElementById("adjetive").value;
    const adverb = document.getElementById("adverb").value;

    const quoteResult = `Do you ${verb} your ${adjetive} ${noum} ${adverb}?, That's funny!`;

    document.getElementById("greeting").textContent = quoteResult;
}
