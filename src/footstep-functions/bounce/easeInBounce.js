import easeOutBounce from "./easeOutBounce";

const easeInBounce = x =>  1 - easeOutBounce(1 - x);

export default easeInBounce;