import React, { useState } from 'react';
import { CreditCard, Smartphone, Info, CheckCircle } from 'lucide-react';

export default function CreditFlowSimulator() {
  const [amount, setAmount] = useState(50000);
  const [duration, setDuration] = useState(3);
  const [operator, setOperator] = useState('');

  const interestRate = 0.05; // 5% d'intérêt
  const totalInterest = amount * interestRate;
  const totalRepayment = amount + totalInterest;
  const monthlyPayment = totalRepayment / duration;

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">CréditFlow</h1>
        <p className="text-gray-500 text-sm">ZKY ELECTRONICS - Bénin 🇧🇯</p>
      </header>

      {/* Simulator Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <CreditCard className="mr-2 text-blue-600" /> Simulateur de prêt
        </h2>

        {/* Amount Slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Montant du prêt (FCFA)</label>
          <input 
            type="range" min="10000" max="500000" step="5000" 
            value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="text-2xl font-bold text-blue-600 mt-2 text-right">
            {amount.toLocaleString()} FCFA
          </div>
        </div>

        {/* Duration */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Durée (Mois)</label>
          <div className="flex gap-2">
            {[1, 3, 6, 12].map((m) => (
              <button 
                key={m} onClick={() => setDuration(m)}
                className={`flex-1 py-2 rounded-xl border-2 transition ${duration === m ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-100 text-gray-500'}`}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-inner mb-6">
          <div className="flex justify-between text-sm opacity-80 mb-1">
            <span>Mensualité :</span>
            <span>Total à rembourser :</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>{Math.round(monthlyPayment).toLocaleString()} FCFA</span>
            <span>{totalRepayment.toLocaleString()} FCFA</span>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-500 text-xs flex items-center gap-1 italic">
            <Info size={14} /> Inclut 5% d'intérêts ({totalInterest.toLocaleString()} FCFA)
          </div>
        </div>

        {/* Operator Choice */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Choisir votre moyen de paiement</label>
          <div className="grid grid-cols-3 gap-3">
            {['MTN', 'Moov', 'Celtis'].map((op) => (
              <button 
                key={op} onClick={() => setOperator(op)}
                className={`p-3 rounded-2xl flex flex-col items-center gap-2 border-2 transition ${operator === op ? 'border-yellow-500 bg-yellow-50' : 'border-gray-100'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs ${op === 'MTN' ? 'bg-yellow-400' : op === 'Moov' ? 'bg-blue-500' : 'bg-red-500'}`}>
                  {op}
                </div>
                <span className="text-xs font-bold">{op}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-800 active:scale-95 transition">
          {operator ? `Demander avec ${operator}` : 'Choisir un opérateur'}
        </button>
      </div>

      <p className="text-center text-gray-400 text-xs">
        Sécurisé par ZKY ELECTRONICS. <br/>
        Tous droits réservés © 2026
      </p>
    </div>
  );
}
