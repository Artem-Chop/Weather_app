interface IcurrentConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipprob: number;
  preciptype: null | string[];
  pressure: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: [];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  uvindex: number;
  visibility: null | number;
  winddir: number;
  windgust: number;
  windspeed: number;
}

export interface IweatherInfo {
  address: string;
  alerts: [];
  currentConditions: IcurrentConditions;
  stations?: string[];
  days: Iday[];
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  timezone: string;
  tzoffset: number;
}

export interface Iday {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  hours: [];
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipcover: number;
  precipprob: number;
  preciptype: null;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: [];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}
