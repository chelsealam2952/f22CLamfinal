// Add packages
require("dotenv").config();
// Add database package and connection string
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


const getTotalRecords = () => {
  console.log(`get total records is running`)
  sql = "SELECT COUNT(*) FROM book";
  return pool.query(sql)
    .then(result => {
      console.log(`successfully ran`)
      return {
        msg: "success",
        totRecords: result.rows[0].count
      }
    })
    .catch(err => {
      console.log(`error occured`)
      console.log(`Error: ${err.message}`)
      return {
        msg: `Error: ${err.message}`
      }
    });
};


module.exports.getTotalRecords = getTotalRecords;