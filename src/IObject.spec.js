/**
 * Test suite for IObject module
 */

import expect from 'expect';
import IObject from './IObject';

describe('IObject:', function () {

	let obj;

	beforeEach(function () {
		obj = new IObject({
			foo: 'bar',
			bar: 'foo',
			fizz: 'buzz'
		});
	});

	it('should return an object with the same properties as the input', function () {
		expect(obj.foo).toEqual('bar');
		expect(obj.bar).toEqual('foo');
		expect(obj.fizz).toEqual('buzz');
	});

	it('should be iterable using a for of loop', function () {
		for (let entry of obj) {

		}

		expect(true).toEqual(true);
	});
});