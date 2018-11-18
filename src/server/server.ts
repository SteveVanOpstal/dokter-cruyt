import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as fs from 'fs';

const data_FILE = './data.json';

if (!fs.existsSync(data_FILE)) {
  fs.writeFileSync(data_FILE, '{}');
}

let data = {};
try {
  data = JSON.parse(fs.readFileSync(data_FILE, {encoding: 'utf8'}));
  console.log(data);
} catch {
}

const server = express();

// static file location
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());

server.get('/data', (req, res) => {
  res.json(data).end();
});

server.post('/data', (req, res) => {
  try {
    const current_data = JSON.stringify(req.body);
    if (current_data !== undefined && current_data.length > 0) {
      fs.writeFile(data_FILE, current_data, () => {
        console.log('data saved: ' + current_data);
        data = req.body;
        res.status(200);
      });
    } else {
      res.status(400);
    }
  } catch {
    res.status(400);
  }
  res.end();
});

const port = process.env.PORT || 3000;
console.log('Running on port: ' + port);
server.listen(port);
