function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            return fn(...args);
        }
    };
}

const throttledFunction = throttle(() => console.log('Function called'), 2000);
window.addEventListener('resize', throttledFunction);
