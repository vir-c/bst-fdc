/*lambda function to fetch campaign list from faunadb */

var faunadb = require("faunadb"),
  q = faunadb.query;

/* configure faunaDB Client with secret key*/
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = function (event, context, callback) {

  client
    .query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("campaigns"))),
        q.Lambda((post) => q.Get(post))
      )
    )
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          status: "OK",
          data: res
        }),
      });
    })
    .catch((error) => {
      console.log(error);
    });

};
