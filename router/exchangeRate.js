const Router = require('koa-router');
const request = require('../api/request');

const exchangeRouter = new Router({
  prefix: '/api/exchangeRate'
})

// ! 根据code获取汇率信息  不需要验证信息
exchangeRouter.get("/getquotation", async (ctx, next) => {

  let query = ctx.request.query;

  let params = {
    group: 'huilv_minute',
    need_reverse_real: 1,
    finClientType: 'pc',
    ...query
  }

  let data = await request.get('https://finance.pae.baidu.com/vapi/v1/getquotation', {params})

  ctx.response.body = data.Result;

})



module.exports = exchangeRouter;