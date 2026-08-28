// Projection équirectangulaire simple (corrigée par cos(latitude)) qui
// convertit des coordonnées [lng, lat] réelles en position x/y dans un
// viewBox SVG. Suffisant pour une carte stylisée à l'échelle de Paris ;
// pas une projection cartographique de précision.
export const VIEWBOX_WIDTH = 1000
export const VIEWBOX_HEIGHT = 820

const LNG_MIN = 2.22
const LNG_MAX = 2.47
const LAT_MIN = 48.813
const LAT_MAX = 48.905
const LAT_MID = (LAT_MIN + LAT_MAX) / 2
const COS_LAT = Math.cos((LAT_MID * Math.PI) / 180)

const lngSpan = (LNG_MAX - LNG_MIN) * COS_LAT
const latSpan = LAT_MAX - LAT_MIN
const scale = Math.min(VIEWBOX_WIDTH / lngSpan, VIEWBOX_HEIGHT / latSpan) * 0.92

const projectedWidth = lngSpan * scale
const projectedHeight = latSpan * scale
const offsetX = (VIEWBOX_WIDTH - projectedWidth) / 2
const offsetY = (VIEWBOX_HEIGHT - projectedHeight) / 2

export function project([lng, lat]) {
  const x = (lng - LNG_MIN) * COS_LAT * scale + offsetX
  const y = VIEWBOX_HEIGHT - ((lat - LAT_MIN) * scale + offsetY)
  return [x, y]
}

export function projectLatLng(lat, lng) {
  return project([lng, lat])
}

export function pointsToPath(points) {
  return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ') + ' Z'
}
