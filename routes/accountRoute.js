const express = require('express');
const router = express.Router();
const status = require('../middlewares/statuscodes');
const messages = require('../middlewares/response_messages');
const fs = require('fs');
const dataPath = './database/account.json';

// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

 /**
 * @swagger
 * /test:
 *   get:
 *     summary: Retrieve string test
 *     description: Retrieve string test. Can be used for test purposes.
 *     responses:
 *       200:
 *         description: A string.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     string:
 *                       type: string
 *                       description: test string
 *                       example: test
*/
router.get('/', (req, res) => {
    try {
        let result;
        result = "Test";
        res.status(status.OK);
        return res.json(result);
    }
    catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR);
        return res.json(messages.INTERNAL_SERVER_ERROR);
    }
});

router.get('/all', function(req, res){
    const accounts = getAccountData();
    res.send(accounts);
});

router.post('/', function(req, res){
    var existAccounts = getAccountData()
    const newAccountId = Math.floor(100000 + Math.random() * 900000)
 
    existAccounts[newAccountId] = req.body;
   
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({success: true, msg: 'account added successfully'});
});


router.put('/:id', function(req, res){
    var existAccounts = getAccountData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const accountId = req.params['id'];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`)
    }, true);
});


router.delete('/:id', function(req, res){
    fs.readFile(dataPath, 'utf8', (err, data) => {
        var existAccounts = getAccountData()
        const userId = req.params['id'];
        delete existAccounts[userId]; 
        saveAccountData(existAccounts);
        res.send(`accounts with id ${userId} has been deleted`)
      }, true);
});

module.exports = router;