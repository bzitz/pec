const test = require('tape')
const { checkRange } = require('./util/util')

test('\npreflop:range: pair vs. other pairs', function(t) {
  [ [ 'AsAh', 'KK, QQ, JJ', 81, 18 ]
  , [ 'AsAh', 'JJ+', 59, 13 ]
  , [ 'JsJh', 'QQ+', 18, 81 ]
  , [ 'JsJh', '88+', 43, 43 ]
  ].forEach(x => checkRange.apply(null, [ t ].concat(x)))
  t.end()
})
