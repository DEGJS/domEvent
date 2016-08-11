# DomEvent
DomEvent is a Promise-based event utility. Essentially, it wraps a Promise around a DOM event handler and fires the Promise's success when the event is triggered. This is especially useful when combined with other Promises to perform some action after all Promises have succeeded. 

## Usage
``` javascript
import domEvent from 'DEGJS/domEvent';

let element = document.querySelector('.some-element');

/* Get a Promise for the transitionend event on an element */
let transitionPromise = domEvent(element, 'transitionend');

/* Get another Promise for some other asynchronous task */
let anotherPromise = someAsyncTask();

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

To support legacy (and some modern) browsers, you'll need to include polyfills for the above APIs.
 
