const mysql = require('./mysql');


// constructor
const Locker = function(locker) {
    this.encoding = locker.encoding;
    this.userCardId = locker.userCardId;
};

Locker.create = (Locker) => {
    mysql.getConnection((err, conn) => {
        if(err) throw err;
        conn.query(`SELECT * FROM USER JOIN LOCKER \
        ON USER.userCardId=LOCKER.userCardId\
        WHERE phoneNumber=${phoneNumber}`, 
        (err, re) => {
            if(err) throw err;
            result(null, re)
        });
    });
}

Locker.findByPhoneNumber = (phoneNumber, result) => {
    mysql.getConnection((err, conn) => {
        if(err) throw err;
        conn.query(`SELECT * FROM USER JOIN LOCKER \
        ON USER.userCardId=LOCKER.userCardId\
        WHERE phoneNumber=${phoneNumber}`, 
        (err, re) => {
            if(err) throw err;
            result(null, re)
        });
    });
}

module.exports = Locker;