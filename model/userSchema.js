import mongoose from 'mongoose'

const schema = mongoose.Schema({
  singer:{
    type:String,
    required:true
  },
  track:{
    type:String,
    required:true
  },
  release_date:{
    type:Date,
    required:true
  },
  rank:{
    required:true,
    type:Number
  }
})

const SingerList = mongoose.model('SingerList',schema)

export default SingerList