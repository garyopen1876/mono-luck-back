module.exports = server => {
    const controller = require('../controllers/index.controllers');
  
    var router = require('express').Router();
  
    router.get('/', (req, res) => {
        res.send('Hello Api!');
    });

    // router.get('/docs', (req, res) => {
    //     res.send();
    // });

    // router.get('/docs/:id', controller.takeSpecificDocs);

    router.get('/registerPage', (req, res) =>{
        res.render('registerPage');
    });

    router.get('/searchPage', (req, res) => {
        res.render('searchPage');
    });

    // router.get('/searchPage/:phone', controller.searchLockerLottery);

    // router.post('/lockerRegister', controller.registerLocker);

    server.use('/api', router);
};