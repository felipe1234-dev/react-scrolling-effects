const walk = (
    interval,
    parentElem,
    hasScroll,
    distance,
    startPos,
    time,
    footstepFunction
) => {
    let now = Date.now();
    let footstep = null;

    if (hasScroll.x) {
        footstep = distance.x*footstepFunction((now - time.start)/(time.end - time.start));
        let newXPos = Math.round(startPos.x + footstep);
        parentElem.scrollLeft = newXPos;
    }

    if (hasScroll.y) {
        footstep = distance.y*footstepFunction((now - time.start)/(time.end - time.start));
        let newYPos = Math.round(startPos.y + footstep);
        parentElem.scrollTop = newYPos;
    } 
            
    // Checks if we're done!
    if (now >= time.end) {
        clearInterval(interval);
        return;
    }
}

export default walk;