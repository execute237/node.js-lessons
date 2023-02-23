const {fork} = require('child_process');

const forkProcess = fork('fork/fork.js');

forkProcess.on('message', (msg) => {
    console.log(`получено сообщение: ${msg}`)
});
forkProcess.on('close', (code) => {
    console.log(`Exited: ${code}`);
});

forkProcess.send('Ping');