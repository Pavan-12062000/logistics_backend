const DbConnection = require('../dbconnection/dbconnection-data');
const logError = require('../utilities/errorLogger');
const dbConnectionInstance = new DbConnection();  

class LogisticsService {
    async register(req) {
        const params =  JSON.parse(req.body.params);
        let response;
            const username = params.username;
            const email = params.email;
            const password = params.password;
            try{
                response = await dbConnectionInstance.register(username, email, password);
                return response;
            }catch(err){
                logError(err);
            }
    }
    async login(req){
        const params =  JSON.parse(req.body.params);
        let response;
        const email = params.email;
        const password = params.password;
        try{
            response = await dbConnectionInstance.login(email, password);
            return response;
        }catch(err){
            logError(err);
        }
        
    }
    async contact(req){
        const params = JSON.parse(req.body.params);
        let response;
        const firstname = params.firstname;
        const lastname = params.lastname;
        const email = params.email;
        const comments = params.comments;
        try{
            response = await dbConnectionInstance.contact(firstname, lastname, email, comments);
            return response;
        }catch(err){
            logError(err);
        }
    }
}
  
module.exports = LogisticsService;