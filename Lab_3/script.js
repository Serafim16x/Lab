// script.js

// script.js
document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Это предотвратит отправку формы по умолчанию
    calculate(); // Вызов функции calculate() после предотвращения действия по умолчанию
});

function calculate() {
    const radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius <= 0) {
        showError('Пожалуйста, введите корректное значение радиуса.');
        clearResult();
        return;
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    showResult(area, circumference);
}

function showResult(area, circumference) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Результат:</h2>
        <p>Площадь круга: ${area.toFixed(2)}</p>
        <p>Длина окружности: ${circumference.toFixed(2)}</p>
    `;
    clearError();
}

function resetForm() {
    document.getElementById('radius').value = ''; 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
}

function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

function clearError() {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';
}

