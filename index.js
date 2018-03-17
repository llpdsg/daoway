require('./tools/db.js')

const express = require('express')
const app = express()
app.use(express.static('public'))

const shopModel = require('./models/shop.js')
const serviceModel = require('./models/service.js')

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
      console.log({data:list})

    }
  })
})

app.listen(3000)
