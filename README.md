# ol-turf-parse
一个openlayers数据和turf数据互转的脚本
# 使用方法

## 引入
```
import * as otparse from 'ol-turf-parse' 
```
或者
```
import {ol2turf, turf2ol} from 'ol-turf-parse'
```
## 使用
这里提供了两个基本方法

### ol2turf
支持将openlayers的Feature、Geometry、Collection等类型转换为turf支持的geojson数据对象。

e.g
```js
let point = [0, 0]
let ft = new Feature({
  geometry: new Point(point)
})
ft.setProperties({
  name: 'ol-turf'
})
let r = ol2turf(ft)
console.log(r)
```

```js
{
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [ 0, 0 ] },
  properties: { name: 'ol-turf' }
}

```

### turf2ol
支持将geojson的Feature、Geometry、FeatureCollection、GeometryCollection等类型转换为openlayers中对应数据类型。

e.g
```js
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
    console.log(r)
```

```js
{
  disposed: false,
  eventTarget_: undefined,
  pendingRemovals_: {},
  dispatching_: {},
  listeners_: { 'change:geometry': [ [Function (anonymous)] ] },
  revision_: 1,
  ol_uid: '38',
  values_: {
    geometry: Point {
      disposed: false,
      eventTarget_: undefined,
      pendingRemovals_: null,
      dispatching_: null,
      listeners_: [Object],
      revision_: 1,
      ol_uid: '37',
      values_: null,
      extent_: [Array],
      extentRevision_: -1,
      simplifiedGeometryMaxMinSquaredTolerance: 0,
      simplifiedGeometryRevision: 0,
      simplifyTransformedInternal: [Function (anonymous)],
      layout: 'XY',
      stride: 2,
      flatCoordinates: [Array]
    },
    name: 'Dinagat Islands'
  },
  id_: undefined,
  geometryName_: 'geometry',
  style_: null,
  styleFunction_: undefined,
  geometryChangeKey_: {
    target: Point {
      disposed: false,
      eventTarget_: undefined,
      pendingRemovals_: null,
      dispatching_: null,
      listeners_: [Object],
      revision_: 1,
      ol_uid: '37',
      values_: null,
      extent_: [Array],
      extentRevision_: -1,
      simplifiedGeometryMaxMinSquaredTolerance: 0,
      simplifiedGeometryRevision: 0,
      simplifyTransformedInternal: [Function (anonymous)],
      layout: 'XY',
      stride: 2,
      flatCoordinates: [Array]
    },
    type: 'change',
    listener: [Function: bound ]
  }
}
```
