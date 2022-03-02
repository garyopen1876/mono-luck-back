const mysql = require('./mysql');


// constructor
const User = function(user) {
    this.name = user.name;
    this.cardId = user.cardId;
    this.phoneNumber = user.phoneNumber;
};

User.findById = (id, result) => {
    mysql.getConnection((err, conn) => {
        if (err) throw err;
        conn.query(`SELECT * FROM USER WHERE id=${id}`,
            (err, re) => {
                if (err) throw err;
                result(null, re);
            }
        );
    });
}

User.findByName = (name, result) => {
    mysql.getConnection((err, conn) => {
        if (err) throw err;
        conn.query(`SELECT * FROM USER WHERE userName=${name}`,
            (err, re) => {
                if (err) throw err;
                result(null, re);
            }
        );
    });
}

User.findByPhoneNumber = (phoneNumber, result) => { 
    mysql.getConnection((err, conn) => {
        if (err) throw err;
        conn.query(`SELECT * FROM USER WHERE phone=${phoneNumber}`,
            (err, re) => {
                if (err) throw err;
                result(null, re);
            }
        );
    });
}

module.exports = User;