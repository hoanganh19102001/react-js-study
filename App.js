import React, { useState } from 'react';
import './App.css';

const allCars = [
  { id: 1, make: 'BMW', model: '300i', year: 2024, type: '345H' },
  { id: 2, make: 'HonDa', model: '400i', year: 2020, type: '456H' },
  { id: 3, make: 'Toyota', model: '500i', year: 2022, type: '567H' },
  { id: 4, make: 'Toyota', model: '600i', year: 2019, type: '678H' },
];

const CarTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredCars = allCars.filter(car => 
    activeTab === 'all' || car.make === 'Toyota'
  );

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick('all')}>ALL</button>
        <button onClick={() => handleTabClick('Toyota')}>Toyota</button>
      </div>
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>
            {car.year} {car.make} {car.model} - {car.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarTabs;