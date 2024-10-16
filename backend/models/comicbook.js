const mongoose=require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const comicBook=new mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    year:{type:Number,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,default:0},
    pages:{type:Number,rquired:true},
    condition:{type:String,enum:['new','used'],required:true},
    description:{type:String}
});
comicBook.plugin(mongoosePaginate);
const comicbook=mongoose.model('ComicBook',comicBook);
module.exports=comicbook;