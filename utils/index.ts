import { FetchCarsParams } from '@/types';

export async function fetchCars({
  manufacturer,
  year,
  fuel,
  model,
  limit,
}: FetchCarsParams) {
  const headers = {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
