const easeInOutQuint = x => (
    x < 0.5 ? (
        16*Math.pow(x, 5) 
    ) : (
        1 - Math.pow(-2*x + 2, 5)/2
    )
);

export default easeInOutQuint;