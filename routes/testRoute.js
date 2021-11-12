const express = require('express');
const router = express.Router();

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
        return res.json(result);
    }
    catch (error) {
        return res.json(messages.INTERNAL_SERVER_ERROR);
    }
});

module.exports = router;