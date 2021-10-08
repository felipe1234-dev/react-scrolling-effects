const handleError = (parentElem, target, duration, selectors) => {
    const { parent, target:targetSelector } = selectors;

    if (!parentElem || !target) {
        return (
            `${!parentElem ? "Parent" : "Target"} element not found! 
            Selector received: "${!parentElem ? parent : targetSelector}"`
        );
    }
    else if (duration < 0) {
        return "Duration can not be negative.";
    }
    else if (typeof target === "number" && target === 0) {
        return "Scroll value can not be zero.";
    }
    
	return ""; // No error...
}

export default handleError;