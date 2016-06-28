let domEvent = function(el, eventName) {
	return new Promise(function(resolve,reject){
		var eventHandler = function (e) {
	        if(e.target === el) {
	     		el.removeEventListener(eventName, eventHandler);
				resolve(e);
			}
	    };

        el.addEventListener(eventName, eventHandler);
    });

}

export default domEvent;