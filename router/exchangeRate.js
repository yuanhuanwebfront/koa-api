const Router = require('koa-router');
const request = require('../api/request');

const exchangeRouter = new Router({
  prefix: '/api/exchangeRate'
})

// 获取汇率信息
exchangeRouter.get("/getquotation", async (ctx, next) => {

  let data = await request.get('https://finance.pae.baidu.com/vapi/v1/getquotation?group=huilv_minute&need_reverse_real=1&code=USDCNH&finClientType=pc')

  ctx.response.body = data.Result;

})



module.exports = exchangeRouter;