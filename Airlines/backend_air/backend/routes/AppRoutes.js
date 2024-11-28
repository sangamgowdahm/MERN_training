class AppRoutes {   
    airlines = (airlinesController) => {
        app.post("/airlines",  airlinesController.create);             
        app.get("/airlines",  airlinesController.readAll);     
        app.get("/airlines/:id", airlinesController.readById);
        app.put("/airlines/:id", airlinesController.update);
        app.delete("/airlines/:id", airlinesController.remove);
    }
    
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;