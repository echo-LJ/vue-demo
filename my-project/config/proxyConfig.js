var proxy_url = 'http://cps-api.jdcloud.com';
var renewal_url = 'http://renewal-console.jcloud.com';

module.exports = {
  proxy: {
    '/apis': {
        target: proxy_url,  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/apis': proxy_url   //需要rewrite的,
        }
    },
    '/renewal': {
        target: renewal_url,  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/renewal': renewal_url   //需要rewrite的,
        }
    }
  }
}
