const getMethod = require('./index.js');

describe('the GET method', () => {
  it('it gets an order in the db by id', () => {
    const method = `GET / HTTP/1.1
    Host: example.com
    Accept-Language: us-en`;
    expect(method.split[0]).toEqual('GET');
  });
});
