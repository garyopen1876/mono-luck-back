const express = require('express');
const server = express();

// parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));

// cors and it's options
const cors = require('cors');

const corsOptions ={
    origin: 'http://localhost:3000/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionSuccessStatus: 200
}

server.use(cors(corsOptions));

// router
require("./src/routes/index.routes")(server);

// port
const PORT = process.env.PORT || 5000;
server.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server is running on port ${PORT}.`);
});
