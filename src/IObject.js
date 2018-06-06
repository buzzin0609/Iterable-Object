"use strict";
exports.__esModule = true;
var IObject = /** @class */ (function () {
    function IObject(obj) {
        for (var n in obj) {
            this[n] = obj[n];
        }
    }
    IObject.prototype.filter = function (callback) {
        var ret = {};
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b.key, value = _b.value;
            if (callback(key, value)) {
                ret[key] = value;
            }
        }
        return new IObject(ret);
    };
    IObject.prototype.values = function () {
        return Object.values(this);
    };
    IObject.prototype.keys = function () {
        return Object.keys(this);
    };
    IObject.prototype.map = function (callback) {
        var ret = {};
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b.key, value = _b.value;
            ret[key] = callback(key, value);
        }
        return new IObject(ret);
    };
    IObject.prototype[Symbol.iterator] = function () {
        var self = this;
        var keys = Object.keys(self);
        return {
            i: 0,
            next: function iObjectNext() {
                var key = keys[this.i];
                if (key) {
                    var value = {
                        key: key,
                        value: self[key]
                    };
                    this.i++;
                    return {
                        value: value,
                        done: false
                    };
                }
                return { value: undefined, done: true };
            }
        };
    };
    return IObject;
}());
exports["default"] = IObject;
//# sourceMappingURL=IObject.js.map