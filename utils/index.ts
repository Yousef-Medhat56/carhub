export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
    "X-RapidAPI-Host":  process.env.RAPID_API_HOST!,
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  
  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}

