const proxy = require('http-proxy-middleware')
module.exports = function(app)
{
    // https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5
    // https://interface.sina.cn/news/wap/fymap2020_data.d.json
    // 跨域 疫情
    app.use(
        proxy.createProxyMiddleware('/api1',
        {
            target:'https://view.inews.qq.com/',
            changeOrigin:true,
            pathRewrite:{
                '^/api1':''
            }
        }),
        // 数据库
        proxy.createProxyMiddleware('/api2',
        {
            target:'http://localhost:3001',
            changeOrigin:true,
            pathRewrite:{
                '^/api2':''
            }
        }),
        proxy.createProxyMiddleware('/api3',
        {
            target:'https://interface.sina.cn',
            changeOrigin:true,
            pathRewrite:{
                '^/api3':''
            }
        }),
        proxy.createProxyMiddleware('/api4',
        {
            target:'https://c.m.163.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api4':''
            }
        }),
        

    )

}