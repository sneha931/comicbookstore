const express=require('express')
const {createcomicbook,
    updatecomicBook,
    deletecomicbook,
    getInventoryList,
    getcomicbookbyId
}=require('../controllers/comicController');
const router=express.Router()
router.post('/comics',createcomicbook);
router.put('/comics/:id',updatecomicBook);
router.delete('/comics/:id',deletecomicbook);
router.get('/comics',getInventoryList);
router.get("/comics/:id",getcomicbookbyId);
module.exports=router;