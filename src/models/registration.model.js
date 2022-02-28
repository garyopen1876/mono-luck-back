const mysql = require('./mysql');

// constructor
const Registration = function(registration) {
    this.phoneNumber = registration.phoneNumber;
    this.priority = registration.priority;
};


Registration.create = (newRegistration, result) => {
    mysql.getConnection((err, conn) => {
        if(err) throw err;
        conn.query(`INSERT INTO REGISTRATION SET ?`, newRegistration, 
        (err, res) => {
            if(err) throw err;
            result(null, res);
        });
    });
}

Registration.findByPhoneNumber = (phoneNumber, result) => {
    mysql.getConnection((err, conn) => {
        if(err) throw err;
        conn.query(`SELECT * FROM REGISTRATION WHERE phone=${ phoneNumber }`, 
        (err, res) => {
            if(err) throw err;
            result(null, res);
        });
    });
}    

module.exports = Registration;