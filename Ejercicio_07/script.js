function calc() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;

    length = parseInt(length)
    width = parseInt(width)

    const select = document.getElementById('select');
    let calcAreaCm;
    let calcAreaInch;

    const calcArea = length * width;

    if (select.value === 'cm') {
        calcAreaInch = calcArea / 2.54;
        calcAreaInch = calcAreaInch.toFixed(2);
        calcAreaCm = calcArea;
    } else {
        calcAreaCm = calcArea * 2.54;
        calcAreaCm = calcAreaCm.toFixed(2);
        calcAreaInch = calcArea;
    }

    document.getElementById('dimensions').textContent = `Las simensiones son ${length} de largo por ${width} de ancho.`;
    document.getElementById('areaCm').textContent = calcAreaCm;
    document.getElementById('areaInch').textContent = calcAreaInch;
}
