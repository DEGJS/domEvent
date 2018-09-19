function domEvent(el, eventName) {
	return new Promise((resolve,reject) => {
		const eventHandler = e => {
	        if(e.target === el) {
	     		el.removeEventListener(eventName, eventHandler);
				resolve(e);
			}
	    };

        el.addEventListener(eventName, eventHandler);
    });

}

export default domEvent;