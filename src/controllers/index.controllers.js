const {Locker, Registration, User} = require('../models/index');


// create a new locker register
exports.create = (req, res) => {

    // if phoneNumber not found
    Registration.findByPhoneNumber(req.body.phone, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(400).send({
              message: `Not found user with phone ${req.body.phone}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving user with id " + req.body.phone
            });
          }
        } else res.send(data);
    });
    
  
    // create a registration
    const registration = new Registration({
        phone : req.body.phone,
        lockerNo : req.body.priority
    });
    
    
    // save registration in the database
    Registration.create(registration, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "creating registration error."
        });
      else res.send(data);
    });
};
  
registerLocker = (req, res) => {
    // if phoneNumber not found
    if(!db.findPhoneNumber(phoneNumber)) {
        res.status(404).json({ message: 'Phone number not found'})
    }

    if(db.verifyDuplicateRegisterLocker(phoneNumber)) {
        res.status(403).json({ message: 'Duplicate registration'})
    }

    res.status(200).json({ message: 'success' })
}


searchLockerLottery = (req, res) => {
    if(!db.findPhoneNumber(phoneNumber)) {
        res.status(400).json({ message: 'membership error'});
    }

    if(!db.verifyDuplicateRegisterLocker(phoneNumber)) {
        res.status(400).json({ message: 'registration not found' });
    }

    const outcome = db.findLocker(phoneNumber);
    res.status(200).json(outcome);    
}

takeSpecificDocs = (req, res) => {
    
}

