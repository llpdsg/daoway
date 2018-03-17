const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/jQuery_daoway')
mongoose.connection.on('open', function () {
  console.log('ok')
})