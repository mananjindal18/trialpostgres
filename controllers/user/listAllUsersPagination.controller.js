const pool = require('../../config/pool');
module.exports.listAllUsersPagination = async (req, res,next) => {
   console.log("Params1",req.params.page);
   console.log("Params2",req.params.limit);
   const page = req.params.page;
   const limit = req.params.limit;
  console.log("Req params in list all users",req.requestTime)
  const response = await pool.query(
    // "SELECT * FROM users ORDER BY username ASC"
    "select * from udf_GetRowsByPageNumberAndSize($1,$2)",[page,limit],
  );
    console.log("Rows",response.rows);
    res.status(200).send(response.rows);
};