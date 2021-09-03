const Pool = require('pg').Pool

const pool = new Pool({
    user:'pocketcard',
    host:'34.136.186.33',
    database:'pocketcard',
    password:'polestar',
    // user:'mananj',
    // host:'localhost',
    // database:'mjtrial',
    // password:'polestar',
    // user:'vrftcqlduxcjim',
    // host:'ec2-18-215-44-132.compute-1.amazonaws.com',
    // database:'dcnlpfl526t1od',
    // password:'1430116baeb793f4cd378b2ed713a003621daa26058f990d3f199579d9471100',
    port:5432
})

module.exports=pool;
// const Pool = require("pg").Pool;
// require("dotenv").config();
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString
//     // ssl: {
//     //     rejectUnauthorized: false,
//     // },
// });
// module.exports = pool;