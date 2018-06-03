
export default class IObject {
	constructor(obj) {
		for (const n in obj) {
			this[n] = obj[n];
		}
	}

	filter(callback) {
		const ret = {};

		for (const { key, value } of this) {
			if (callback(key, value)) {
				ret[key] = value;
			}
		}

		return new IObject(ret);
	}

	values() {
		return Object.values(this);
	}

	keys() {
		return Object.keys(this);
	}

	map(callback) {
		const ret = {};

		for (const { key, value } of this) {
			ret[key] = callback(key, value);
		}

		return new IObject(ret);
	}

	[Symbol.iterator]() {
		const self = this;
		const keys = Object.keys(self);

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

