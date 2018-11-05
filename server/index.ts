import express = require('express');
const basicAuth = require('basic-auth-connect');
import * as next from 'next';
require('dotenv').config();
const request = require("request");

const Router = require('./routes').Router;
const PORT = Number(process.env.PORT) || 3003;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.use(
        basicAuth(
          process.env.ADMIN_USER || 'root',
          process.env.ADMIN_PASSWORD || 'root',
        ),
      );
    }

    Router.forEachPattern((page: string, pattern: string, defaultParams: any) =>
      server.get(pattern, (req, res) =>
        app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params)),
      ),
    );

    // GraphQL Tunnel
    server.all("/graphql", (req, res) => {
      const url = process.env.GRAPHQL_URL;
      return req.pipe(request({ qs: req.query, uri: url }).on('error', function (err: any) {
        console.error(err);
        return res.sendStatus(400);
      }))
        .pipe(res);
    });

    // Webhook Tunnel
    server.all("/webhooks/*", (req, res) => {
      const url = `${process.env.GRAPHQL_URL}${req.url}`;
      console.log(url);
      return req.pipe(request({ qs: req.query, uri: url }).on('error', function (err: any) {
        console.error(err);
        return res.sendStatus(400);
      })).pipe(res);
    })

    server.get('*', (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(PORT, (err: any) => {
      if (err) throw err;
      process.stdout.write(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    process.stdout.write(ex.stack);
    process.exit(1);
  });
