import React, { useState, useEffect } from 'react';

const ProtectedPage = () => {
  const [taxRate, setTaxRate] = useState(() => {
    // Try to load the tax rate from localStorage
    const storedTaxRate = localStorage.getItem('taxRate');
    return storedTaxRate ? parseInt(storedTaxRate, 10) : 13; // Default to 13% if not found
  });

  useEffect(() => {
    // Save the tax rate to localStorage whenever it changes
    localStorage.setItem('taxRate', taxRate);
  }, [taxRate]);

  const handleChangeTaxRate = () => {
    const password = prompt('Введите пароль для доступа к изменению налога');
    if (password === 'admin123') {
      const newTaxRate = prompt('Введите новый процент налога');
      if (newTaxRate) {
        setTaxRate(parseInt(newTaxRate, 10)); // Set the new tax rate
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

export default ProtectedPage;
