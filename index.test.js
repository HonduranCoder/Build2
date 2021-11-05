const getMethod = require('./index.js');

describe('the GET method', () => {
  it('GET method', () => {
    const method = `GET / HTTP/1.1
    Host: example.com
    Accept-Language: us-en`;
    expect(method.split[0]).toEqual('GET');
  });
});
