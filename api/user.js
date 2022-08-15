const express = require('express')
const router = express.Router()
const db = require('../db.js')

// 查询用户列表,page页码,row每页几条数据,keyword查询用户名字,order年龄升序asc和降序desc
router.get("/list",(req,res) => {
	const page = req.query.page||1
	const row = req.query.row||10
	const keyword = req.query.keyword||''
	const order=req.query.order||'asc'
	const params = ['%'+keyword+'%',(parseInt(page) - 1) * parseInt(row), parseInt(row)]
	db.query("select * from user where name like ? order by age "+order+" limit ?,?",params,(err,result) => {
		if(err){
			throw new Error(err)
		}else{
			db.query('select count(*) as total from user where name like ?', ['%'+keyword+'%'] ,(error, results)=> {
				if (error) {
					throw new Error(error)
				} else {
					res.json({
						code:200,
						msg:"ok",
						data: result,
						page: parseInt(page),
						row: parseInt(row),
						total: results[0]['total']
					})
				}
			})
		}
    })
})

//查询某个用户信息
router.get("/person",(req,res) => {
	db.query('select * from user where user_id = ?', req.query.user_id, (err, result)=>{
		if(err){
			throw new Error(err)
		}else{
			if(!result[0]){
				res.json({
					code:250,
					msg:"用户不存在"
				})
			}else{
				res.json({
					code:200,
					msg:'ok',
					data:result[0]
				})
			}
		}
	})
})

// 用户注册
router.post("/add",(req,res) => {
	if(!req.body.name){
		throw new Error('请填写账号')
	}else if(!req.body.password){
		throw new Error('请填写密码')
	}else{
		req.body.create_time=new Date().getTime()
		let sql = "insert into user set ?";
		db.query(sql,req.body,(err,result) => {
		    if(err){
		       throw new Error(err)
		    }else{
				res.json({
					code:200,
					msg:'注册成功!',
					data:req.body
				})
		    }
		})
	}
})

// 用户注销
router.post("/delete",(req,res) => {
	db.query("delete from user where user_id = ?",req.body.user_id, (err, result)=>{
        if(err){
           throw new Error(err)
        }else{
			res.json({
				code:200,
				msg:'ok'
			})
        }
    })
})

// 修改用户信息
router.post('/edit', (req, res)=>{
    if(!req.body.user_id){
		throw new Error('用户信息有误')
	}else{
		db.query('update user set ? where user_id=?', [req.body, req.body.user_id], (err, results)=>{
			if(err){
				throw new Error(err)
			}else{
				db.query('select * from user where user_id = ?', req.body.user_id, (err, results)=>{
					if(err){
						throw new Error(err)
					}else{
						res.json({
							code:200,
							msg:'修改成功',
							data:results
						})
					}
				})
			}
		})
	}
})

module.exports = router