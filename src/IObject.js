
export default class IObject {
	constructor(obj) {
		Object.assign(this, obj);
	}

	[Symbol.iterator]() {
		const self = this;
		return {
			i: 0,
			next: function iObjectNext() {
				const keys = Object.keys(self);
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

