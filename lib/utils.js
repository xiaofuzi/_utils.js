var _utils = module.exports = {};

/*
 * primitive types
 * string/number/boolean/null/undefined
 */
var isType = function(type) {
    return function(str) {
        var elType = Object.prototype.toString.call(str).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
        if (elType == type) {
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
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

/*
 * complex types
 * array/function
 */


_utils.isArray = function(value) {
    return Array.isArray(value);
}

_utils.isFunc = function(value) {
    return isType('function')(value);
}




/*
 * String type
 */
_utils.toArray = function(str) {
    if (_utils.isNull(str) || _utils.isUndefined(str)) {
        _utils.error(str + " is not a string!");
    } else {
        return [].slice.call(str);
    }
}


/*
 * Error handler
 */
_utils.error = function(msg) {
    throw Error(msg);
}

_utils.log = function(msg) {
    console.log(msg);
}


_utils.extend = function(child, parent, bool) {
    if (bool == undefined) {
        bool = false;
    }
    for (var key in parent) {
        if (parent.hasOwnProperty(key)) {
            if (bool == true) {
                child[key] = parent[key];
            } else {
                child[key] = child[key] || parent[key];
            }
        }
    }
    return child;
};
_utils.objMap = function(obj, fn) {
    if (typeof obj == 'object') {
        return Object.keys(obj).map(function(attr) {
            return fn(attr, obj[attr]);
        })
    }
};
_utils.objEach = function(obj, fn) {
    if (typeof obj == 'object') {
        Object.keys(obj).forEach(function(attr) {
            fn(attr, obj[attr]);
        })
    }
};
_utils.proxy = function(fn, context) {
    return fn.bind(context);
};
/*
 * params: {}, obj1, obj2
 */
_utils.deepExtend = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    out[key] = utils.deepExtend(out[key], obj[key]);
                } else {
                    out[key] = obj[key];
                }
            }
        }
    }
    return out;
};
/*
 * params: {}, obj1, obj2
 */
_utils.extends = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                out[key] = arguments[i][key];
            }
        }
    }
    return out;
};

_utils.equals = function (a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  _utils.clone= function (a) {
    try {
      return JSON.parse(JSON.stringify(a));
    } catch (e) {
      return undefined;
    }
  };

_utils.parseHTML = function(str) {
    var tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children;
};
_utils.parseJSON = function(str) {
    return JSON.parse(str);
};
