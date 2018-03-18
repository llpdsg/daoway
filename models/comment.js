const mongoose= require('mongoose')
const commentSchema= new mongoose.Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  star:{type:Number},
  nick:{type:String}
})
module.exports= mongoose.model('comment', commentSchema)