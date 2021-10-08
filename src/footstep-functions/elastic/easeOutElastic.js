const easeOutElastic = x => {
    const c4 = (2 * Math.PI) / 3;

    return x === 1 || x === 0 ? x : (
        Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
    );
}

export default easeOutElastic;