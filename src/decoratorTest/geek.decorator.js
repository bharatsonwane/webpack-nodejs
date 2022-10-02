// Decorator function
function gfg(target, name, descriptor) {
    let fn = descriptor.value;

    // Checks if "descriptor.value" is a function or not
    if (typeof fn == 'function') {
        descriptor.value = function (...args) {
            console.log(`parameters: ${args}`);
            let result = fn.apply(this, args);

            // Print the addition of passed arguments
            console.log(`addition: ${result}`);
            return result;
        }
    }
    return descriptor;
}


class geek {
    constructor() {
    }
    @gfg
    add(a, b) {
        return a + b;
    }
}


export const testAdd = () => {
    debugger
    let e = new geek();
    e.add(100, 200);
}
