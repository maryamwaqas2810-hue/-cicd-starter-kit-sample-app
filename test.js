const http = require('http');

function checkServer() {
  const expectedMessage = 'Hello from the SafeX CI/CD Starter Kit sample app!';

  const req = http.get('http://localhost:3000', (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (data === expectedMessage && res.statusCode === 200) {
        console.log('TEST PASSED: Server responded correctly.');
        process.exit(0);
      } else {
        console.log('TEST FAILED: Unexpected response.');
        process.exit(1);
      }
    });
  });

  req.on('error', (err) => {
    console.log('TEST FAILED: Could not connect to server.', err.message);
    process.exit(1);
  });
}

checkServer();
