import React, { useState } from 'react';
import { IweatherInfo } from './types';


import Card from './Card';

interface CustomElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const API_KEY: string = '65X4KGPYBRENW92WD9KSQD6TY';

const Weather: React.FC = () => {
  const [info, setInfo] = useState<IweatherInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<CustomForm>): void => {
    event.preventDefault();
    console.log(event.currentTarget.elements.city.value);
    getCurrentWeather(event.currentTarget.elements.city.value);
  };

  const getCurrentWeather = async (city: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&lang='uk'&contentType=json`
      );
      const data = await res.json();
      setInfo(data);
    } catch (error) {
      console.log(error);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex_column">
      <form
        action=""
        onSubmit={handleSubmit}
        className="input_form flex_column"
      >
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          className="form_input"
        />
        <button type="submit" className="form_button">
          Search
        </button>
      </form>
      {loading ? (
        <span className="loader"></span>
      ) : info !== null ? (
        <Card information={info} />
      ) : (
        <h3>
          Not found. Check the spelling of the city, or your city is not in our
          database
        </h3>
      )}
    </div>
  );
};

export default Weather;
