const getDbConnection = require('../dbconnection/dbconnection')
let getDbConnectionInstance = new getDbConnection();
const queryConstantsInstance = require('../queryconstants/queryconstants');
const logError = require('../utilities/errorLogger');

class DbConnection{
    async register(username, email, password){
        let client;
        try{
            client = await getDbConnectionInstance.getConnection();
            let query = queryConstantsInstance.register;
            let params =[username, email, password];
            console.log(query, params);
            const response = await client.query(query, params);
            return response;
        }catch (error) {
            logError(error);
            throw error;
        }finally{
            if(client){
                await client.end();
            }
        }
    }

    async login(email, password){
        let client;
        try{
            client = await getDbConnectionInstance.getConnection();
            let query = queryConstantsInstance.login;
            let params =[email, password];
            console.log(query, params);
            const response = await client.query(query, params);
            return response.rows;
        }catch (error) {
            logError(error);
            throw error;
        }finally{
            if(client){
                await client.end();
            }
        }
    }

    async contact(firstname, lastname, email, comments){
        let client;
        try{
            client = await getDbConnectionInstance.getConnection();
            let query = queryConstantsInstance.contact;
            let params = [firstname, lastname, email, comments];
            const response = await client.query(query, params);
            return response.rows;
        }catch(err){
            logError(error);
            throw error;
        }finally{
            if(client){
                await client.end();
            }
        }
    }
}

module.exports = DbConnection;