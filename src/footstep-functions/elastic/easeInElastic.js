const easeInElastic = x => {
    const c4 = (2 * Math.PI) / 3;

    return x === 1 || x === 0 ? x : (
        -Math.pow(2, 10 * x - 10) * Math.sin((x*10 - 10.75)*c4)
    );
}

export default easeInElastic;