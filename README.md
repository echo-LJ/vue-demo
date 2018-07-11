# vue-demo
Vue.js & Express.js
### sever中命令行
```
  npm install -f
  node ./node_modules/eslint/bin/eslint.js --init
  npm install --save express cors body-parser morgan
  npm install --save sequelize sqlite3@3.1.8
```
### express
### Sequelize 
  是一个基于 promise 的适用于 Node.js 和 io.js 的 ORM（译者注： Object-Relational Mapping 把关系数据库的表结构映射到对象）。支持的数据库有：PostgreSQL, MySQL, MariaDB, SQLite 以及 MSSQL
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
# server details
```
  // 环境变量设置了prot就用环境变量的port,否则就用8081
  app.listen(process.env.PORT || 8081)
```
### my-project
安装axios
```
  npm install --save axios
```
# my-project details
* services中的baseURL为sever中的端口
