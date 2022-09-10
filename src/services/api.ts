import { environment } from 'src/environments/environment';

const options = {
  method: 'GET',
  url: environment.apiUrl,
  params: {},
  headers: {
    'X-RapidAPI-Key': environment.apiKey,
    'X-RapidAPI-Host': environment.apiHost,
  },
};

export async function fetcherWeatherApi(coords: GeolocationCoordinates) {
  const { latitude, longitude } = coords;

  console.log({ latitude, longitude, options });
}

export async function getWeatherFromLocation(location?: GeolocationPosition) {
  if (!location) return;

  const { coords } = location;
  return await fetcherWeatherApi(coords);
}
