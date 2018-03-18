require('./tools/db.js')

const express = require('express')
const app = express()
app.use(express.static('public'))

const shopModel = require('./models/shop.js')
const serviceModel = require('./models/service.js')
const itemModel = require('./models/item.js')
const commentModel = require('./models/comment.js')

app.get('/getShopList',function (req, res) {
  shopModel.find({},function (err,list) {
    if (!err){
      res.send({data:list})
    }
    // console.log({data:list})
  })
})
app.get('/getService',function (req, res) {
  serviceModel.find({},function (err,list) {
    if (!err){
      res.send({data:list})
    }
  })
})
app.get('/getItem',function (req, res) {
  itemModel.find({},function (err,list) {
    if (!err){
      res.send({data:list})
    }
  })
})
app.get('/getComment',function (req, res) {
  const page = req.query.page
  commentModel.find({}).limit(10).skip((page - 1) * 10).exec(function (err, list) {
    if (!err) {
      res.send({data: list})
    }
  })
})

app.listen(3000)
