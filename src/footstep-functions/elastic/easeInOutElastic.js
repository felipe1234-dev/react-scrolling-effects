const easeInOutElastic = x => {
	const c5 = (2 * Math.PI)/4.5;
           
    return x === 1 || x === 0 ? x : x < 0.5 ? (
        -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5))/2
    ) : (
        (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5))/2 + 1
    );
}

export default easeInOutElastic;