const primus = Primus.connect();

primus.on('data', function message(data) {
    console.log('Received a new message from the server', data);

    primus.write('pong: ' + data)
});