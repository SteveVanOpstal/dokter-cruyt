import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {enableProdMode} from '@angular/core';
import {renderModuleFactory} from '@angular/platform-server';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import * as bodyParser from 'body-parser';
import express from 'express';
import {existsSync, readFileSync, writeFile, writeFileSync} from 'fs';
import {join} from 'path';

enableProdMode();

const data_FILE = './data.json';

if (!existsSync(data_FILE)) {
  writeFileSync(data_FILE, '{}');
}

let data = {};
try {
  data = JSON.parse(readFileSync(data_FILE, {encoding: 'utf8'}));
  console.log(data);
} catch {
}


// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

let renderedPage: string;
async function renderHtml(): Promise<string> {
  if (!renderedPage) {
    const html = await renderModuleFactory(
        AppServerModuleNgFactory,
        {document: template, url: '/', extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]});
    renderedPage = html;
  }
  return renderedPage;
}

renderHtml().then(() => console.log('Rendered page'));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// static file location
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', async (_req, res) => {
  try {
    const html = await renderHtml();
    res.writeHead(200);
    res.write(html);
    res.end();
  } catch (error) {
    res.writeHead(600, error);
    res.end();
  }
});

app.get('/api/data', (_req, res) => {
  res.json(data).end();
});

app.post('/api/data', (req, res) => {
  try {
    const current_data = JSON.stringify(req.body);
    if (current_data !== undefined && current_data.length > 0) {
      writeFile(data_FILE, current_data, () => {
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

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
