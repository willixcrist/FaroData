const axios = require('axios');
const models = require('./models');
const diagnosticos = models.diagnostico;
diagnosticos.findByPk(1)
.then(diag =>{
    console.log(diag);
    const url = "http://localhost:8000/api/diagnostico/test";
    axios.post(url, {diagnostico:diag})
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
});
