const comicbook=require('../models/comicbook')

exports.createcomicbook=async(req,res)=>{
    try{
        const newcomic=new comicbook(req.body);
        await newcomic.save()
        res.status(201).json(newcomic);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.updatecomicBook=async(req,res)=>{
    try{
      const comic=await comicbook.findByIdAndUpdate(req.params.id,req.body,{new:true});
      if(!comic) 
        return res.status(404).json({message:"comic not found"});
    res.status(200).json(comic);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
exports.deletecomicbook=async(req,res)=>{
    try{
        const comic=await comicbook.findByIdAndDelete(req.params.id);
        if(!comic)
            return res.status(404).json({message:"comic not found"});
        res.status(200).json({message:"comic deleted"});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}
exports.getInventoryList = async(req,res)=>{
    try{
       const {author,year,price,condition,sortBy,order,page,limit}=req.query
       let query={};
       if(author) query.author=author;
       if(year) query.year=year;
       if(price) query.price=price;
       if(condition) query.condition=condition;
       const options={
        sort:{[sortBy]:order==='desc'?-1:1},
        page:parseInt(page)||1,
        limit:parseInt(limit) || 10
       };
       const comics=await comicbook.paginate(query,options);
       res.status(200).json(comics);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
exports.getcomicbookbyId=async(req,res)=>{
    try{
       const comic=await comicbook.findById(req.params.id);
       if(!comic)
          return res.status(404).json({message:"comic not found"});
       res.status(200).json(comic)
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}