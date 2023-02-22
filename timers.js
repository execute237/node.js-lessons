// const start = performance.now();
// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('прошла секунда');
// }, 1000);


// function myFunc(arg) {
//     console.log(`Аргумент => ${arg}`);
// }
// setTimeout(myFunc, 1500, 'ПРИВЕТ');



// const timerId = setTimeout (() => {
//     console.log('boom!!');
// }, 5000);

// setTimeout (() => {
//     clearTimeout(timerId);
//     console.log('timeout clear');
// }, 1000); 

console.log('Перед');
setImmediate(() => {
    console.log('после всех')
});
console.log('После');