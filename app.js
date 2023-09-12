const Koa = require('koa');

const routes = require('./router/index');

const app = new Koa();

routes.forEach(route => {

  app.use(route.routes())

})

app.listen(3000, () => console.log('服务启动'));