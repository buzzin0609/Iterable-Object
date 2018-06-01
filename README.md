# Object to Iterable

Gives ordinary Javascript objects the super Symbol.iterator power of the future!

## Install

From npm
`npm install --save-dev object-to-iterable`

Or Yarn
`yarn add object-to-iterable`

To start using IObject, `import` or `require` it into your project.

`import IObject from 'object-to-iterable`<br/>
or<br/> 
`const IObject = require('object-to-iterable')`

## Example Usage

an instance of IObject acts like any other object: 
```javascript
const obj = new IObject({
    foo: 'bar'
});

console.log(obj.foo);
//outputs 'bar
```

However, the magic happens when you use the instance of IObject in a [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, introduced in ES 2015:

```javascript
const obj = new IObject({
    foo: 'bar'
});

for (let entry of obj) {
	console.log(entry);
	//outputs { key: 'foo', value: 'bar' }
}
```

Using object destructuring you can get direct access to the entry:

```javascript
const obj = new IObject({
    foo: 'bar'
});

for (let { key, value } of obj) {
	console.log(key); // 'foo'
	console.log(value); // 'bar'
}
```

## Prototype Methods

IObject.filter
IObject.map

### Todo

- filter and map documentation
- filter and map tests