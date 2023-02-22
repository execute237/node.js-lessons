const eventEmmiter = require('events');
const myEmmiter = new eventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
}

myEmmiter.addListener('connected', logDbConnection); //Добавление эвента, аналог on
myEmmiter.emit('connected'); //вызов эвента

myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected'); или удаление всех эвентов




myEmmiter.on('msg', (data) => {
    console.log(data);
})
myEmmiter.prependListener('msg', (data) => { // эыент prepend будет вызвано РАНЬШЕ чем эвент с ON
    console.log('prepend');
})
myEmmiter.emit('msg', 'data, 123456')




myEmmiter.once('off', () => {   // вызов эвента происходит единажды!
    console.log('единоразовый вызов')
})
myEmmiter.emit('off');
myEmmiter.emit('off'); // не будет вызова, ибо off уже удален


console.log(myEmmiter.getMaxListeners()); // максимальное кол-во listner 10
myEmmiter.setMaxListeners(1); // установка максимального кол-во listener
console.log(myEmmiter.getMaxListeners()); // 1
console.log(myEmmiter.listenerCount('msg')); // считает кол-во listener на эвенте
console.log(myEmmiter.listenerCount('off'));

console.log(myEmmiter.listeners('msg')); //возвращает массив listener этого эвента
console.log(myEmmiter.eventNames('msg')) // название эвентов



myEmmiter.on('error', (err) => {  // Пример обработки ошибки
    console.log(`Произошла ошибка ${err.message}`)
})
myEmmiter.emit('error', new Error ('BOOM!!'));