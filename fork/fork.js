process.on('message', (msg) => {
    console.log(`Клиент получил: ${msg}`);
    process.send('Pong');
    process.disconnect();
})