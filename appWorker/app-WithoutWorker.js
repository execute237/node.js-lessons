const factorial = require('../worker/factorial');

const compute = (arr) => {
    const array = [];
    for (let i = 0; i<100000000; i++){
        array.push(i*i);
    }
    return arr.map(item => factorial(item));
}

const main = () => {
    performance.mark('start');
    const result = [
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
    ]
    console.log(result);
    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
}

setTimeout(() => {
    console.log('SETTIMEOUT 1SEC');
}, 1000) // заблокирован

main ();
