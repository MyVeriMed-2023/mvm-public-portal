import axios from 'axios';

const BASE_URL = 'https://ipinfo.io/json';

export interface GeolocationData {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  ip: string;
}

export const getGeolocation = async (): Promise<GeolocationData | null> => {
  try {
    const response = await axios.get<GeolocationData>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch geolocation data:', error);
    return null;
  }
};
