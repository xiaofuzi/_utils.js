var _ = require('../lib/utils');

/*
type test
*/

console.log(_.isString('yangxiaofu'));
console.log(_.isNumber(18));
console.log(_.isUndefined());
console.log(_.isBool(true));
console.log(_.isNull(null));
console.log(_.isArray([]));
console.log(_.isFunc(_.isFunc))


console.log(_.toArray("yangxiaofu"));