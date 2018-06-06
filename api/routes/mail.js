const express = require('express');
const router = express.Router();

var api_key = 'key-c2756a1f00f4f70f394bdf10a529c2f7';
var domain = 'sandboxfce0a2c4b1e64be8933ad6af7183624c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/', (req, res, next) => {
    var data = {
        from: 'postmaster@sandboxfce0a2c4b1e64be8933ad6af7183624c.mailgun.org',
        to: req.body.mail,
        subject: 'Confirmación de cuenta de BeneficiosUM',
        html: 'Hola '+req.body.nombre+', <br><br>'+
        '¡Gracias por registrarte a BeneficiosUM! <br><br>'+
        'Ahora estarás al tanto de todas los beneficios que tenés por estudiar en la UM. <br><br>'+
        'Tu número de verificación es: '+req.body.numeroVerificacion
    }
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
});

module.exports = router;