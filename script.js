function convert(unit) {
    if (unit === 'celsius') {
      const celsiusInput = document.getElementById('celsius');
      const fahrenheitInput = document.getElementById('fahrenheit');
      const celsiusValue = parseFloat(celsiusInput.value);
  
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusValue * 9 / 5 + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
      } else {
        fahrenheitInput.value = '';
      }
    } else if (unit === 'fahrenheit') {
      const celsiusInput = document.getElementById('celsius');
      const fahrenheitInput = document.getElementById('fahrenheit');
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
      if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        celsiusInput.value = celsiusValue.toFixed(2);
      } else {
        celsiusInput.value = '';
      }
    }
  }
  