import React, { useState } from 'react';
import { IweatherInfo, Iday } from './types';

interface CardProps {
  information: IweatherInfo;
}

const Card: React.FC<CardProps> = ({ information }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = (): void => {
    setToggle(!toggle);
  };

  const { address, resolvedAddress, currentConditions, days } = information;
  return (
    <div className="flex_column">
      <div className="flex_column">
        <h1>Your request is: {address}</h1>
        <p>{resolvedAddress}</p>
        <p>{currentConditions.conditions}</p>

        <p>{Math.round(currentConditions.temp)}°C</p>
        <button type="button" onClick={onToggle} className="form_button">
          {!toggle ? 'Show next 7 days' : 'Hide'}
        </button>
      </div>
      {toggle && (
        <ul className="days_container">
          {days.slice(1, 8).map((day: Iday) => {
            return (
              <li key={day.datetime} className="list_item">
                <p>{day.datetime}</p>
                <p>{day.conditions}</p>
                <p>{day.description}</p>
                <p>
                  {Math.round(day.tempmin)}-{Math.round(day.tempmax)}°C
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;
