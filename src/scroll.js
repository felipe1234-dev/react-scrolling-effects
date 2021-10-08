import walk from "./walker";
import handleError from "./errorHandling";
import smoothstep from "./footstep-functions/smoothstep";

const scroll = (target = null, options = {
    container: document.scrollingElement.tagName || document.documentElement.tagName,

    duration: 500, 

    yAxis: true, 
    xAxis: false,

    effect: smoothstep
}) => {
    let {
        container, 
        duration, 
        yAxis, 
        xAxis,
        effect
    } = options;
	
	// Set defualt values:
    container = !container ? document.scrollingElement.tagName || document.documentElement.tagName : container;	
	duration = typeof duration === "undefined" ? 500 : duration;
	yAxis = !yAxis ? true : yAxis, 
    xAxis = !xAxis ? false : xAxis,
    effect = !effect ? smoothstep : effect;

    const isNumber = typeof target === "number";
    const parentElem = document.querySelector(container);
    const targetElem = !isNumber ? document.querySelector(target) : null;
    
    const err = handleError(parentElem, isNumber ? target : targetElem, duration, { 
        parent: container, 
        target: target 
    });
    
    if (err) {
    	return Promise.reject(err);
    }
    
	if (duration === 0) {
    	if (yAxis) parentElem.scrollTop = isNumber ? parentElem.scrollTop + target : targetElem.offsetTop;
        
        if (xAxis) parentElem.scrollLeft = isNumber ? parentElem.scrollLeft + target : targetElem.offsetLeft;
    
        return;
    }
	
    const startTime = Date.now();
    const endTime = startTime + duration;

    const startX = parentElem.scrollLeft;
    const startY = parentElem.scrollTop;

    const distanceX = (isNumber ? target : targetElem.offsetLeft) - parentElem.scrollLeft;
    const distanceY = (isNumber ? target : targetElem.offsetTop) - parentElem.scrollTop;

    const hasXScroll = parentElem.scrollWidth > parentElem.clientWidth;
    const hasYScroll = parentElem.scrollHeight > parentElem.clientHeight; 
    // Check if the parent element is scrollable in x and y. 

    let int = setInterval(() => walk(
        int, parentElem,
        { x: hasXScroll && xAxis, y: hasYScroll && yAxis }, 
        { x: distanceX, y: distanceY },
        { x: startX, y: startY },
        { start: startTime, end: endTime },
        effect
    ), 0);
}

export default scroll;