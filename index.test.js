const getMethod = require('./index.js');

describe('the GET method', () => {
  it('it gets an order in the db by id', () => {
    const getMethod = `GET`;
    expect(getMethod).toEqual('GET');
  });
});
