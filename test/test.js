var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello, Ricardo-world...!!!', function(done) {
    request(app).get('/').expect('hello, Ricardo-world...!!!', done);
  });
});
