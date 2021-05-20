import { Collection, Feature } from 'ol/index.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import Geometry from 'ol/geom/Geometry.js'

export function ol2turf (olData) {
  let format = new GeoJSON()
  if (olData instanceof Feature) {
    return format.writeFeatureObject(olData)
  } else if (olData instanceof Geometry) {
    return format.writeGeometryObject(olData)
  } else if (olData instanceof Collection) {
    let dataList = olData.getArray()
    if (dataList[0] instanceof Feature) {
      return format.writeFeaturesObject(dataList)
    }
  }
  return null
}

export function turf2ol (turfData) {
  let format = new GeoJSON()
  if (turfData.type === 'Feature') {
    return format.readFeature(turfData)
  } else if (['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'].indexOf(turfData.type) > -1) {
    return format.readGeometry(turfData)
  } else if (turfData.type === 'FeatureCollection') {
    return format.readFeatures(turfData)
  } else if (turfData.type === 'GeometryCollection') {
    return turfData.geometries.map((geom) => {
      return format.readGeometry(geom)
    })
  } else {
    return null
  }
}