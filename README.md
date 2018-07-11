# vue-demo
Vue.js & Express.js
### sever中命令行
```
  node ./node_modules/eslint/bin/eslint.js --init
  npm install --save express cors body-parser morgan
  save express body-parser cors morgan
```
### express
### body-parser
body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
```
  app.use(bodyParser.json())
```
### cors
express中的中间件cors（）可以释放我们的API的访问权限，在命令行中输入 $npm install cors --save 进行安装。
### morgan
设置应用程序报告并把用户的请求生成日志文件。
```
  app.use(morgan('combined'))
```
