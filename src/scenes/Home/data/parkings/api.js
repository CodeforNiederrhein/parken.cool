import 'whatwg-fetch'

const places = new Map([
  ['moers', 'https://moers-api.parken.cool/'],
  ['kleve', 'https://kleve-api.parken.cool/'],
  ['fake', '/api.json']
])

export async function fetchParkingData (city = 'kleve') {
  const request = await fetch(places.get(city))
  const data = await request.json()
  return {
    ...data,
    city
  }
}
