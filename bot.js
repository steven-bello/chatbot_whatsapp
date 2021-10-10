// comandos: 
// npm init -y
// npm i --save venom-bot = instalar puppeteer
// node app = para iniciar bot y poder escanear QR 
// nodemon app = para evitar parar e iniciar el bot

// Supports ES6
import { create, Whatsapp } from 'venom-bot'
const venom = require('venom-bot')

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro)
    })

 //Bot
function start(client) {
    client.onMessage((message) => {
        console.log(message)
        if (message.body === 'hola' || message.body === 'HOLA' || message.body === 'Hola' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Hola 👋🏻' + message.sender.shortName + ' bienvenid@‼️\n' + ' \n' + 
                'Soy el bot de BELCOR 🤖💭.\n \nPuedes iniciar escribiendo un número para seleccionar una opción:\n \n1️⃣ = Descarga,\n2️⃣ = Precio,\n3️⃣ = Contacto,\n4️⃣ = Requisitos,\n5️⃣ = Salir' +' \n'+
                'También puedes teclear 0️⃣ para desplegar el menú de ayuda para saber todos los comandos y su funcionamiento de cada uno.\n'
                )
                .then((result) => { console.log('Result: ', result) })
                .catch((erro) => { console.error('Error when sending: ', erro) })
        }
        if (message.body === '0' || message.body === '1'|| message.body === '2'|| message.body === '3'|| message.body === '4'|| message.body === '5' && message.isGroupMsg === false){
                switch (message.body) {
                // AYUDA
                case '0':
                    client
                        .sendText(message.from, 'Este es el menú de ayuda ' + message.sender.shortName + '\n' +
                        'Los siguientes opciones te ayudarán a saber algo en especifico. \n \nIngresa el número que desees:👇🏻\n' + ' \n' +
                        '1️⃣ = Descarga: te mostrará el link que deberas teclear para poder descargar el software.\n' + ' \n' +
                        '2️⃣ = Precio: te mostrará el precio actual del software.\n' + ' \n' +
                        '3️⃣ = Contacto: te mostrará los telefonos y correos de BELCOR.\n' + ' \n' +
                        '4️⃣ = Requisitos: te mostrará el software adicional que necesitas tener en tu computadora.\n' + ' \n' +
                        '5️⃣ = Salir del menú'
                        )
                    .then((result) => { console.log('Result: ', result) })
                    .catch((erro) => { console.error('Error when sending: ', erro) })
                break;
                // DESCARGA
                case '1':
                    client
                        .sendText(message.from, '' + message.sender.shortName + ' Elegiste la opción 1️⃣:\n\n' +
                        'Ingresa a tu computadora para poder descargar SOFTDELF en este link:\nwww.softdelf.com/descargas/gcrxml.html'
                        )
                        .then((result) => { console.log('Result: ', result) })
                        .catch((erro) => { console.error('Error when sending: ', erro) })
                break;
                // PRECIO
                case '2':
                    client
                        .sendText(message.from, '' + message.sender.shortName + ' Elegiste la opción 2️⃣:\n\n' +
                        'El precio actual del programa es de 2,320 MXN IVA incluido.'
                        )
                        .then((result) => { console.log('Result: ', result) })
                        .catch((erro) => { console.error('Error when sending: ', erro) })
                break;
                // CONTACTO
                case '3':
                    client
                        .sendText(message.from, '' + message.sender.shortName + ' Elegiste la opción 3️⃣:\n\n' +
                        'Nuestros correos: octavioarmando90@gmail.com | steven7seven.10@gmail.com'
                        )
                        .then((result) => { console.log('Result: ', result) })
                        .catch((erro) => { console.error('Error when sending: ', erro) })
                break;
                // REQUISITOS
                case '4':
                    client
                        .sendText(message.from, '' + message.sender.shortName + ' Elegiste la opción 4️⃣:\n\n' +
                        'En tu computadora debes tener instalados los siguientes programas:\n' + ' \n' +
                        'Microsoft .NET Framework 4.6.1 (x86 ó x64) | link descarga: https://dotnet.microsoft.com/download/dotnet-framework\n' + ' \n' +
                        'MYSQL (VERSION MINIMA 5.5.41 [x86 ó x64]) | link descarga:\nhttps://dev.mysql.com/downloads/mysql/\n' + ' \n' +
                        'TeamViewer | link descarga:\nhttp://www.softdelf.com/descargas/TeamViewer_Setup.exe\n' + ' \n' +
                        'Instalacion MySql: | link video: https://youtu.be/Sv2vBT3dtvQ\n' + '\n' +
                        'Instalacion GCRXML: | link descarga:\nhttp://www.softdelf.com/Descargas/Manual_inst_GCRXML.zip\n' + ' \n' +
                        'Te recomendamos asegurarte que los programas mencionados esten funcionando correctamente en tu computadora.\n' + ' \n' +
                        'Descargar software BELCOR | link descarga:\nhttp://www.softdelf.com/descargas/GCRXML.application\n'
                        )
                        .then((result) => { console.log('Result: ', result) })
                        .catch((erro) => { console.error('Error when sending: ', erro) })
                break;
                // SALIR
                case '5':
                    client
                        .sendText(message.from,'Adiós ✌🏼 ' + message.sender.shortName + ' vuelve pronto.')
                break;
                // INVALIDO
                default:
                    client
                        .sendText(message.from, 'Puedes intentar de nuevo tecleando 0️⃣ y eligiendo una opción válida')
                break;
            }
        } 
    })
}