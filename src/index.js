const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./config/server_config');


const ApiRoutes = require('./routes/index');

 
const setupAndStartServer = async()=>{
    //create the  express object
    const app = express();
    //middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    app.use(cors());
    app.listen(PORT,()=>{
        console.log(`Server started at  ${PORT}`);
       
    });
}
setupAndStartServer();