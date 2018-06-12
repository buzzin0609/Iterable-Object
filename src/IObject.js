var IObject = /** @class */ (function () {
    function IObject(obj) {
        for (var n in obj) {
            this[n] = obj[n];
        }
    }
    IObject.prototype.filter = function (callback) {
        return iObjectFilter(this)(callback);
    };
    IObject.prototype.values = function () {
        return iObjectValues(this);
    };
    IObject.prototype.keys = function () {
        return Object.keys(this);
    };
    IObject.prototype.map = function (callback) {
        return iObjectMapper(this)(callback);
    };
    IObject.prototype[Symbol.iterator] = function () {
        var self = this;
        var keys = this.keys();
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
export default IObject;
function iObjectMapper(obj) {
    return function mapper(callback) {
        var ret = {};
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var _a = obj_1[_i], key = _a.key, value = _a.value;
            ret[key] = callback(key, value);
        }
        return new IObject(ret);
    };
}
function iObjectFilter(obj) {
    return function filterFn(callback) {
        var ret = {};
        for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
            var _a = obj_2[_i], key = _a.key, value = _a.value;
            if (callback(key, value)) {
                ret[key] = value;
            }
        }
        return new IObject(ret);
    };
}
function iObjectValues(obj) {
    return Object.keys(obj)
        .map(function (key) { return obj[key]; });
}
//# sourceMappingURL=IObject.js.map