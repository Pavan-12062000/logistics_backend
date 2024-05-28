const express = require('express')
const router = express.Router()
const LogisticsService = require('../services/logisticsservice');
const logError = require('../utilities/errorLogger');

const logisticsService = new LogisticsService();

router.post('/register', async (req,res) => {
    try{
        response = logisticsService.register(req);
        res.send(response);
    }catch(err){
        logError(err);
    }
})

router.post('/login', async (req,res) => {
    try{
        const response = await logisticsService.login(req);
        res.send(response);
    }catch(err){
        logError(err);
    }
    
})

router.post('/contact', async (req,res) => {
    try{
        const response = await logisticsService.contact(req);
        res.send(response);
    }catch(err){
        logError(err);
    }
})

module.exports = router;
