const express = require("express");
const basicAuth = require("basic-auth-connect");
import * as next from 'next';

const PORT = Number(process.env.PORT) || 3003;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(basicAuth(process.env.ADMIN_USER || 'root', process.env.ADMIN_PASSWORD || 'root'));
  }

  server.get("*", (req:any, res:any) => {
    return handle(req, res);
  });

  server.listen(PORT, (err:any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
