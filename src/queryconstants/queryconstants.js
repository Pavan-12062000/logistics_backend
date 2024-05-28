class queryConstants{

    register = `insert into user_details (username, firstname, email, password) values ($1, $2, $3, $4)`;

    login = `select username, firstname, email, password from user_details where email = $1 and password = $2`;

    contact = `insert into contact (firstname, lastname, email, comments, timestamp) values ($1, $2, $3, $4, now())`;
}

module.exports = new queryConstants();