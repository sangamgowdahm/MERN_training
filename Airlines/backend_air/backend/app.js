'use strict';
const { server_port, cors_origin,    mongo_url } = require('./config'); 
global.server_port = server_port;
global.cors_origin = cors_origin;
global.mongo_url = mongo_url;

const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

global.express = express;
global.cors = cors;
global.mongoose = mongoose;

const app = express(); 

global.app = app;

//...
const AppModel = require('./model/AppModel'); 
global.AppModel = AppModel;
//...
const AppController = require('./controller/AppController'); 
const AirlinesController = require('./controller/AirlinesController');//????

//...
global.appController = new AppController(); 
global.airlineController = new AirlinesController();
//
const appModel = new AppModel(); 
global.appModel = appModel;
//
appController.connectToMongo();
const AirlineModel = appModel.AirlineModel(); 
global.AirlineModel = AirlineModel; 

//...
const AppRoutes = require('./routes/AppRoutes'); 
global.AppRoutes = AppRoutes;

// middlewares
    app.use(cors(cors_origin)); 
    app.use(express.json());                        
    app.use(express.urlencoded({extended: true}));  

// II - Routes for API end points
    const appRoutes = new AppRoutes();
    appRoutes.root(appController);
    //
    appRoutes.airlines(airlineController);

// III - runs the server
    app.listen(server_port, appController.serverInit);   