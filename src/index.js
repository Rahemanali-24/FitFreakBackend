const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./config/server_config');


const ApiRoutes = require('./routes/index');
const corsOptions = {
    origin: '*',
    credentials: true, 
    optionSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
};
const setupAndStartServer = async()=>{
    //create the  express object
    const app = express();
    //middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use(cors(corsOptions));
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>{
        console.log(`Server started at  ${PORT}`);
       
    });
}
setupAndStartServer();