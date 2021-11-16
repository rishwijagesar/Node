const express = require('express');
const app = require('../app');
const router = express.Router();
const status = require('../middlewares/statuscodes');
const messages = require('../middlewares/response_messages');

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
        result = "test";
        res.status(status.OK);
        return res.json(result);
    }
    catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR);
        return res.json(messages.INTERNAL_SERVER_ERROR);
    }
});

router.get('/person/:id', function(req, res){
    res.status(status.OK);
    res.statusMessage(messages.OK);
    res.json({ firstname: 'John', lastname: 'Doe'});
});

router.post('/person', function(req, res){
    // save to database
});

router.delete('/person/:id', function(req, res){
    // delete from database
});

module.exports = router;