const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test',
	port:3306,
	charset: 'utf8_general_ci'
})


db.connect((err) => {
	if (err) {
		console.log('数据库连接失败, 错误信息:',err.sqlMessage)
	} else {
		console.log('数据库连接成功!')
	}
})

module.exports = db
