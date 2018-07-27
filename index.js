/**
 * HTTP Cloud Function to push notification to billing server.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

const axios = require('axios');

module.exports.billNotify = function billNotify (req, res) {
  axios
    .post(req.body.url, {
      data: req.body.data
    });

    res.status(200).send("Request completed.");
};
