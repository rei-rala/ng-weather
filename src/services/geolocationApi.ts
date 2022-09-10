export function getCurrentPosition() {
  let position: GeolocationPosition | null = null;

  navigator?.geolocation.getCurrentPosition((pos) => {
    position = pos;
  });

  return position;
}
