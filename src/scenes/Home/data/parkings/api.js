import 'whatwg-fetch'

export async function fetchParkingData () {
  const request = await fetch('https://parkplatz-kleve-api.daten.cool/')
  const data = await request.json()
  return data
}
