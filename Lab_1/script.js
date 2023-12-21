document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const sideLength = parseFloat(document.getElementById('sideLength').value);
  
    if (isNaN(sideLength) || sideLength <= 0) {
      showError('Пожалуйста, введите корректное значение длины стороны квадрата.');
      return;
    }
  
    const perimeter = sideLength * 4;
    const area = sideLength * sideLength;
  
    showResult(perimeter, area);
  });
  
  function resetForm() {
    document.getElementById('squareForm').reset();
    document.getElementById('result').innerHTML = '';
  }
  
  function showResult(perimeter, area) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Периметр квадрата: ${perimeter}<br>Площадь квадрата: ${area}`;
  }
  
  function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const errorPara = document.createElement('p');
    errorPara.style.color = 'red';
    errorPara.textContent = message;
    resultDiv.appendChild(errorPara);
  }
  