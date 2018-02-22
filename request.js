//## Find Android devices for Web automation
// curl -H 'Content-Type: application/json'
// -H 'Authorization: Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' -X
// GET 'http://mobilefarm.minsk.epam.com:7100/automation/api/device/android?web=chrome&version=7'

const http = require('http');

const desiredCapabilities = [
  capabilities = {
   "platformname":"android"
  }
]
console.log('/automation/api/device/' + JSON.stringify(desiredCapabilities));

const options = {
    host: 'mobilefarm.minsk.epam.com',
    path: '/automation/api/device/' + JSON.stringify(desiredCapabilities),
    // path: '/automation/api/device/android?web=chrome&version=7',
    method: 'POST', //!!!
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer '+ process.argv[2],
    },

    capabilities: [{
       platformName: 'android',
    }],

    port: 7100,
}

let req = http.request(options, (res) => {
  // console.log('options', options);
  console.log('response: ', res.status);
  var str = '';

  res.on('data', (chunk) => {
    str += chunk;
    // console.log('BODY: ', chunk);
  })

  res.on('end', () => {
    var buf = new Buffer(str);
    console.log(buf.toString('utf-8'));
  });

  res.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

});

console.log(req);

req.end();
