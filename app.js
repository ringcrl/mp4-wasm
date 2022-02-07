const Koa = require('koa');
const Serve = require('koa-static');
const Cors = require('@koa/cors');
const Range = require('koa-range');

const app = new Koa();
app.use(Range);
app.use(Cors({
  origin: '*',
  allowHeaders: ['range'],
  allowMethods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
}));

app.use(Serve('.'));
app.listen(9091);

console.log('http://localhost:9091/public/demo-fmp4/index.html or others');
