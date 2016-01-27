(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _utils = module.exports = {};

/*
 * primitive types
 * string/number/boolean/null/undefined
 */
var isType = function(type) {
    return function(str) {
        if (typeof str === type) {
            return true;
        } else {
            return false;
        }
    }
}

_utils.isString = function(str) {
	return isType('string')(str);
}

_utils.isNumber = function(value) {
	return isType('number')(value);
}

_utils.isBool = function(value) {
	return isType('boolean')(value);
}

_utils.isUndefined = function(value) {
	return isType('undefined')(value);
}

_utils.isNull = function(value) {
	if(value === null){
		return true;
	}else{
		return false;
	}
}

/*
 * complex types
 * array/function
 */


 _utils.isArray = function(value){
 	return Array.isArray(value);
 }

 _utils.isFunc = function(value){
 	return isType('function')(value);	
 }




/*
* String type
*/
_utils.toArray = function(str){
	if(_utils.isNull(str) || _utils.isUndefined(str)){
		_utils.error(str + " is not a string!");
	}else{
		return [].slice.call(str);
	}
}


/*
* Error handler
*/
_utils.error = function(msg){
	throw Error(msg);
}

_utils.log = function(msg){
	console.log(msg);
}


},{}],2:[function(require,module,exports){
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
},{"../lib/utils":1}]},{},[2]);
