function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const discount1 = parseFloat(document.getElementById('discount1').value);
    const discount2 = parseFloat(document.getElementById('discount2').value);

    if (isNaN(inputValue) || isNaN(discount1) || isNaN(discount2)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const result = inputValue - discount1 - discount2;

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(3)}`;

    addHistory(inputValue,
