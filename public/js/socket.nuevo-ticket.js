// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');


// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnet', function() {
    console.log('Desconectado del servidor.');
});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});