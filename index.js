//const method = getMethod(`
//GET / HTTP/1.1
//Host: example.com
//Accept-Language: us-en`);

//console.log(method); // prints GET

function getMethod() {
  const method = `GET / HTTP/1.1
  Host: example.com
  Accept-Language: us-en`;
  return method.split[0];
}

module.exports = getMethod();
