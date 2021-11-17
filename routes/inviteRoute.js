const express=require('express')
const router=express.Router();

const eventCtrl=require('../controllers/inviteController');


router.post('/invite', eventCtrl.createinvite);

module.exports=router;