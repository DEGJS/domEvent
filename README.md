# domEvent
A Promise-based event utility.

## Sample Usage
``` javascript
let transitionPromise = domEvent(element, 'transitionend');
Promise.all([transitionPromise])
			.then(onSuccessFunction)
			.catch(onErrorFunction);
```

## Revision History
* **1.0.0:** First commit.