const Koa = require('koa');
const app = new Koa();

import { start } from './skipper';

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

console.log('Listening on port 4000');
app.listen(4000);
start();
