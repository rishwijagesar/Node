const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try{
        let result;
        result = "test";
        return res.json(result);
    }
    catch (error){
        return res.json(messages.INTERNAL_SERVER_ERROR);
    }
});

module.exports = router;