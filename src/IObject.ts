
export default class IObject {
    constructor(obj) {
        for (const n in obj) {
            this[n] = obj[n];
        }
    }

    filter(callback): IObject {
        return iObjectFilter(this)(callback);
    }

    values() {
        return iObjectValues(this);
    }

    keys() {
        return Object.keys(this);
    }

    map(callback): IObject {
        return iObjectMapper(this)(callback);
    }

    [Symbol.iterator]() {
        const self = this;
        const keys = this.keys();

        return {
            i: 0,
            next: function iObjectNext() {
                const key = keys[this.i];

                if (key) {
                    const value = {
                        key,
                        value: self[key]
                    };
                    this.i++;
                    return {
                        value,
                        done: false
                    };
                }

                return { value: undefined, done: true };
            }
        }
    }
}

function iObjectMapper(obj) {
    return function mapper(callback) {
        const ret = {};

        for (const { key, value } of obj) {
            ret[key] = callback(key, value);
        }

        return new IObject(ret);
    }
}

function iObjectFilter(obj) {
    return function filterFn(callback) {
        const ret = {};

        for (const { key, value } of obj) {
            if (callback(key, value)) {
                ret[key] = value;
            }
        }

        return new IObject(ret);
    }
}

function iObjectValues(obj) {
    return Object.keys(obj)
        .map(key => obj[key]);
}