/* eslint-disable no-undef */
import { Collection } from 'ol/index.js'
import Feature from 'ol/Feature.js'
import {
  Polygon, 
  LineString, 
  Point
} from 'ol/geom.js'
import { ol2turf, turf2ol } from '../index.js'
import chai from 'chai/index.js'

const {expect} = chai

describe('ol2turf', function () {
  describe('feature', function () {
    let point = [0, 0]
    let ft = new Feature({
      geometry: new Point(point)
    })
    ft.setProperties({
      name: 'ol-turf'
    })
    let r = ol2turf(ft)
    console.log('ol2turf', r)
    it('coord', function () {
      expect(r.geometry.coordinates[0]).to.be.equal(point[0])
      expect(r.geometry.coordinates[1]).to.be.equal(point[1])
    })

    it('properties', function () {
      expect(r.properties.name).to.be.equal('ol-turf')
    })
  })
  describe('geometry', function () {
    let point = [0, 0]
    let ft = new Point(point)
    let r = ol2turf(ft)
    it('coord', function () {
      expect(r.coordinates[0]).to.be.equal(point[0])
      expect(r.coordinates[1]).to.be.equal(point[1])
    })
  })
  describe('featureCollection', function () {
    let i = 0
    let points = new Collection()
    while (i < 10) {
      let x = i
      let y = Math.pow(i, 2)
      let ft = new Feature({
        geometry: new Point([x, y])
      })
      points.push(ft)
      i++
    }
    let r = ol2turf(points)
    it('length', function () {
      expect(r.features.length).to.be.equal(10)
    })
  })
  describe('otherData', function () {
    let i = 0
    let points = new Collection()
    while (i < 10) {
      let x = i
      let y = Math.pow(i, 2)
      let ft = new Point([x, y])
      points.push(ft)
      i++
    }
    let r = ol2turf(points)
    it('GeometryCollection convert is null', function () {
      expect(r).to.be.equal(null)
    })
  })
})

describe('turf2', function () {
  describe('feature convert', function () {
    let obj = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [125.6, 10.1]
      },
      'properties': {
        'name': 'Dinagat Islands'
      }
    }
    let r = turf2ol(obj)
    console.log('turf2ol', r)
    it('properties', function () {
      expect(r.get('name')).to.be.equal('Dinagat Islands')
    })
    it('coordinates x', function () {
      expect(r.getGeometry().getCoordinates()[0]).to.be.equal(125.6)
    })
  })
  describe('geometry convert', function () {
    let obj = { 'type': 'Polygon',
      'coordinates': [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
      ]
    }
    let r = turf2ol(obj)
    it('coord', function () {
      expect(r.getCoordinates().length).to.be.equal(obj.coordinates.length)
    })
  })
})