import SingerList from "../model/userSchema.js"

export const getAllUser = async(req,res) =>{
  try{
    const item = await SingerList.find()
    res.status(200).send(item)
  }
  catch(err){
    console.log(err)
  }
}
export const getUser = async(req,res) =>{
  try{
    const getUserById = await SingerList.findById(req.params.id)
    res.send(getUserById)
  }
  catch(err){
    console.log(err)
  }
}

export const createUser = async(req,res) =>{
  try{
    const createUser = new SingerList({
      singer:req.body.singer,
      track:req.body.track,
      release_date:req.body.release_date,
      rank:req.body.rank
    })
    const update = await createUser.save()
    if(!update){
      res.status(404).send("User not found")
    }
    res.send(update)
  }
  catch(err){
    console.log(err)
  }
}

export const deleteUser = async(req,res) =>{
  try{
    const deleteUserId = await SingerList.findByIdAndDelete(req.params.id)
    if(!deleteUserId){
      res.status(404).send("User not found")
    }
    res.send('User deleted successfully') 
  }
  catch(err){
    console.log(err)
  }
}

export const updateUser = async(req,res) =>{
  try{
    const Item = await SingerList.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!Item) res.status(404).send("User not found")
    res.send(Item)
  }
  catch(err){
    console.log(err)
  }
}