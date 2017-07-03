const frisby = require('frisby');

frisby.create('Verficiando o ROOT da App')
  .get('http://localhost:8080')
  .expectStatus(200)
  .expectJSON({
    info:'Teste de documentação de API',
    versao: 1
  })
.toss();

frisby.create('Verficiando o estado da API')
  .get('http://localhost:8080/estado')
  .expectStatus(200)
  .expectJSON({
    estado: 'online'
  })
.toss();
