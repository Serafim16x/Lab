document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('triangleForm');
    const resetBtn = document.getElementById('resetBtn');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const sideA = parseFloat(document.getElementById('sideA').value);
      const sideB = parseFloat(document.getElementById('sideB').value);
      const sideC = parseFloat(document.getElementById('sideC').value);
  
      if (sideA && sideB && sideC) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
          const s = (sideA + sideB + sideC) / 2;
          const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
          resultDiv.textContent = `Площадь треугольника: ${area.toFixed(2)}`;
        } else {
          resultDiv.textContent = 'Такой треугольник не существует. Сумма двух сторон должна быть больше третьей стороны.';
        }
      } else {
        resultDiv.textContent = 'Введите значения для всех сторон треугольника.';
      }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateTriangleArea();
      });
    
    resetBtn.addEventListener('click', function() {
      form.reset();
      resultDiv.textContent = '';

      sideInputs.forEach(input => {
        input.addEventListener('input', calculateTriangleArea);
        
      });
    });
});


