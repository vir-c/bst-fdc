/*lambda function to fetch campaign list from faunadb */

var faunadb = require("faunadb"),
  q = faunadb.query;

/* configure faunaDB Client with secret key*/
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async function (event, context) {

  const res = await client.query(
        q.Map(q.Paginate(q.Documents(q.Collection("campaigns"))), q.Lambda((post) => q.Get(post)))
    );

  let campaigns = [];
  if(res.data && Array.isArray(res.data)){
    campaigns = res.data.map((item)=>item.data)
  }

  return {
      statusCode: 200,
      body: JSON.stringify({
        status: "OK",
        data: campaigns
      }),
    }
};

(async ()=> console.log( await exports.handler({},{})))()