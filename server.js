const next = require('next');
const koa = require('koa');
const KoaRouter = require('koa-router');
const NextRoutes = require('next-routes');
const { ROUTES } = require('./routes');
const { createServer } = require('http')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 8086;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();
(async function () {
  await app.prepare();
  const server = new koa();
  const router = new KoaRouter();
  const routes = new NextRoutes();
  ROUTES.forEach(route => routes.add(route.name, route.page));
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    await next()
  });
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  })
})();
