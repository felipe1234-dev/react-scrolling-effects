import easeOutBounce from "./easeOutBounce";

const easeInOutBounce = x => (
    x < 0.5
    ? (1 - easeOutBounce(1 - 2*x))/2
    : (1 + easeOutBounce(2*x - 1))/2
);

export default easeInOutBounce;