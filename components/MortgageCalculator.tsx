import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const rate = interestRate / 100 / 12;
    const payments = loanTerm * 12;
    const x = Math.pow(1 + rate, payments);
    const monthly = (principal * x * rate) / (x - 1);
    return monthly.toFixed(2);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Calculadora de Hipoteca</h2>
      <div className="mb-4">
        <label className="block">Precio de la Casa</label>
        <input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block">Pago Inicial</label>
        <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block">Plazo del Préstamo (años)</label>
        <input type="number" value={loanTerm} onChange={e => setLoanTerm(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block">Tasa de Interés (%)</label>
        <input type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={calculateMortgage}>Calcular</button>
      </div>
      <div>
        <h3 className="text-xl font-bold">Pago Mensual: ${calculateMortgage()}</h3>
      </div>
    </div>
  );
};

export default MortgageCalculator;