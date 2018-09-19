# DomEvent
DomEvent is a Promise-based event utility. Essentially, it wraps a Promise around a DOM event handler and resolves the Promise when the DOM event is triggered. This is especially useful when combined with other Promises to perform some action after all Promises have succeeded.

## Install
DomEvent is an ES6 module. Consequently, you may need a transpiler ([Babel](https://babeljs.io) is a nice one) to compile DomEvent into compatible Javascript for your runtime environment.

If you're using NPM, you can install DomEvent with the following command:

```
$ npm install @degjs/dom-event
```

## Usage
``` javascript
import domEvent from 'DEGJS/dom-event';

const element = document.querySelector('.some-element');

/* Get a Promise for the transitionend event on an element */
const transitionPromise = domEvent(element, 'transitionend');

/* Get another Promise for some other asynchronous task, such as an API call */
const anotherPromise = someAsyncTask();

/* Perform some action when all promises succeed */
Promise.all([transitionPromise, anotherPromise])
			.then(onSuccessFunction)
			.catch(onErrorFunction);
```

## Parameters

#### el
Type: `Element`   
The DOM element that the DOM event will occur on.

#### eventName
Type: `String`   
The DOM event that will trigger the Promise's success.

## Browser Support

Breakpoints depends on the following browser APIs:
+ [Promise](https://github.com/stefanpenner/es6-promise)

To support legacy browsers, you'll need to include polyfills for the above APIs.
 
