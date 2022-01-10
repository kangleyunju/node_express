//导入express框架
const express = require("express");
const app = express();

//引入内置模块,用于自动打开浏览器
const {exec} = require("child_process");

//解决跨域问题
const cors = require('cors');
app.use(cors());

// 中间件,表单提交
const bodyParser = require('body-parser');
app.use(bodyParser.json());//x-www-form-urlencoded方式提交
app.use(bodyParser.urlencoded({extended: true}));//application/json方式提交

//引入os,获取本地ip
const os = require('os')
const network = os.networkInterfaces()
const ip=network[Object.keys(network)[0]][1].address

//用户相关接口
app.use('/user', require('./api/user'))

//图片上传接口
app.use('/upload', require('./api/upload'))

//order
app.use('/order', require('./api/order'))

//统一错误处理
app.use(function(err, req, res, next) {
    res.json({
        code:250,
        msg: err.message
    })
})


const server=app.listen(3000, function() {
	const host = server.address().address;
	const port = server.address().port;
	console.log("接口地址:","http://localhost:" + port)
	console.log("接口地址:","http://" + ip+ ':'+port)
	// exec("start http://" + ip+':'+ port+"/user")
})
