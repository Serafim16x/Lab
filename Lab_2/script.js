document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        showError('Пожалуйста, введите корректные значения для длины и ширины.');
        return;
    }

    const perimeter = 2 * (length + width);
    const area = length * width;

    showResult(perimeter, area);
});

function resetForm() {
    document.getElementById('rectangleForm').reset();
    document.getElementById('result').innerHTML = '';
}

function showResult(perimeter, area) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Периметр прямоугольника:</strong> ${perimeter}<br><strong>Площадь прямоугольника:</strong> ${area}`;
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const errorPara = document.createElement('p');
    errorPara.classList.add('text-danger');
    errorPara.textContent = message;
    resultDiv.appendChild(errorPara);
}