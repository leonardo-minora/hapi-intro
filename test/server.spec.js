const frisby = require('frisby');

frisby.create('Verficiando o ROOT da App')
  .get('http://localhost:8080')
  .expectStatus(200)
  .expectJSON({
    info:'api exemplo',
    versao: 1
  })
.toss();

frisby.create('Verficiando o ROOT da App')
  .get('http://localhost:8080/status')
  .expectStatus(200)
  .expectJSON({
    estado: 'online'
  })
.toss();
