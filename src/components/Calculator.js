import React, { useState, useEffect } from 'react';

// ProtectedPage component
const ProtectedPage = ({ taxRate, setTaxRate }) => {
  const handleChangeTaxRate = () => {
    const password = prompt('Введите пароль для доступа к изменению налога');
    if (password === 'admin123') {
      const newTaxRate = prompt('Введите новый процент налога');
      if (newTaxRate) {
        setTaxRate(parseInt(newTaxRate, 10)); // Update the tax rate in the parent component
      }
    } else {
      alert('Неверный пароль');
    }
  };

  return (
    <div className="container protected-page">
      <h1>Защищенная страница</h1>
      <p>Текущий налоговый процент: {taxRate}%</p>
      <button onClick={handleChangeTaxRate}>Изменить налоговый процент</button>
    </div>
  );
};

// Calculator component
const Calculator = ({ taxRate }) => {
  const [income, setIncome] = useState(0); // Доход
  const [expenses, setExpenses] = useState(0); // Расходы
  const [taxes, setTaxes] = useState(0); // Налоги

  // Функция для расчета налогов
  const calculateTaxes = () => {
    const taxableIncome = income - expenses;
    const calculatedTaxes = taxableIncome * (taxRate / 100);
    setTaxes(calculatedTaxes);
  };

  return (
    <div className="container">
      <h1>Калькулятор финансов</h1>

      <div className="calculator-container">
        <div className="calculator-item">
          <label>Доходы</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            placeholder="Введите доходы"
          />
        </div>

        <div className="calculator-item">
          <label>Расходы</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(parseFloat(e.target.value))}
            placeholder="Введите расходы"
          />
        </div>

        <div className="calculator-item">
          <label>Налоговая ставка (%)</label>
          <input
            type="number"
            value={taxRate}
            readOnly
            placeholder="Текущая налоговая ставка"
          />
        </div>

        <div className="calculator-item">
          <label>Вычет налогов</label>
          <input
            type="number"
            value={taxes}
            readOnly
            placeholder="Налоги"
          />
        </div>

        <button onClick={calculateTaxes}>Рассчитать</button>
      </div>
    </div>
  );
};

// Parent component (App or similar)
const App = () => {
  const [taxRate, setTaxRate] = useState(() => {
    const storedTaxRate = localStorage.getItem('taxRate');
    return storedTaxRate ? parseInt(storedTaxRate, 10) : 13; // Default to 13% if not found
  });

  useEffect(() => {
    localStorage.setItem('taxRate', taxRate); // Save the tax rate to localStorage
  }, [taxRate]);

  return (
    <div>
      <ProtectedPage taxRate={taxRate} setTaxRate={setTaxRate} />
      <Calculator taxRate={taxRate} />
    </div>
  );
};

export default App;
