const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
// import { start } from './skipper';
import { parseEskip } from './eskip';

app.use(cors());
app.use(bodyParser());

// response
app.use(async ctx => {
    ctx.body = {
        routes: JSON.parse(await parseEskip(ctx.request.body.eskip))
    };
});

console.log('Listening on port 4000');
app.listen(4000);
