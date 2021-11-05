const getMethod = require('./index.js');

describe('the GET method', () => {
  it('GET method', () => {
    const method = getMethod(method.split[0]);
    expect(method).toEqual(GET);
  });
});
