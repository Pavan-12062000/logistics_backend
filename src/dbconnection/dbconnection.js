const logError = require('../utilities/errorLogger')
const { Pool } = require('pg');

let pool = null;

class getDbConnection{
  async getConnection(){
    try{
      if(pool === null ){
        pool= new Pool({
          user: 'postgres',
          host: 'localhost', // usually 'localhost' if your database is hosted locally
          database: 'Logistics',
          password: 'Sahithi@2002',
          port: '5432', // usually 5432 for PostgreSQL
        })
      }
      pool.on('error', (err, client)=>{
        logError("Error occured in Pool");
        logError(err);
      })
        console.log("In DB conenct try block");
        let client = await pool.connect();
        return client;
    }catch(err){
      logError("Error in connecting to database");
      logError(err);
    }
  }
}

module.exports = getDbConnection;


