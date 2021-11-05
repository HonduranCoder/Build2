describe('03_separation-of-concerns-demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('it gets an order in the db by id', () => {
    return request(app)
      .get('HTTP/1.1')
      .then((res) => {
        expect(res.body).toEqual('GET');
      });
  });
