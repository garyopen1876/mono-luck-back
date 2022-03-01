const mysql = require('./mysql');

// constructor
const Registration = function(registration) {
    this.phone = registration.phone;
    this.lockerNo = registration.lockerNo;
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

Registration.findByPhoneNumber = (phone, result) => {
    mysql.getConnection((err, conn) => {
        if(err) throw err;
        conn.query(`SELECT * FROM REGISTRATION WHERE phone=${ phone }`, 
        (err, res) => {
            if(err) throw err;
            result(null, res);
        });
    });
}    

module.exports = Registration;