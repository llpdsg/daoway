const mongoose= require('mongoose')
const serviceSchema= new mongoose.Schema({
  title:{type:String},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String}
})
module.exports= mongoose.model('service', serviceSchema)