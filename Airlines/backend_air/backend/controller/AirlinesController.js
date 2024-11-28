//TrainerModel
class AirlinesController {
    create = async (request, response) => {
        const form = { ...request.body };
        
        let rbody = { };
        let rstatus = 200;

        try {
            const airlineModel = new AirlineModel( {
                _id : new mongoose.Types.ObjectId(),
                airline: form.airline, 
                source: form.source,
                destination: form.destination, 
                fare: form.fare,
                duration: form.duration
            } );
            const airlineModelRes = await airlineModel.save();

            const airlineDoc = await AirlineModel.findOne({_id: airlineModel._id}).lean();

            rbody = {
                data : airlineDoc,
                isError: false
            };

            console.log("create", rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in creating trainer.\n${error}`},
                isError: true
            };         

            console.log("create", rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }     

    update = async (request, response) => {
        //path variables
        const id = request.params.id;
        //form posted
        const form = { ...request.body };
        
        //
        let rbody = {};
        let rstatus = 200;

        try {
            const updatableAirline = {
                airline: form.airline, 
                source: form.source,
                destination: form.destination, 
                fare: form.fare,
                duration: form.duration
            };  
            const airlineModelRes = await AirlineModel.findOneAndUpdate(
                        { _id : id }, 
                        updatableTrainer, 
                        {new: true});
            const updatedAirline = await AirlineModel.findOne({ _id: id });
            
            if(!updatedAirline) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true
                };

                 console.log(rbody); 

                rstatus = 404;
            }
            else {
                rbody = {
                    data : updatedAirline,
                    isError: false,
                    isLoggedIn: true
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in updating trainer.\n${error}`},
                isError: true,
                isLoggedIn: true
            };

            console.log(rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);        
    }
    
    remove = async (request, response) => {
        const id = request.params.id;
        
        let rbody = {};
        let rstatus = 200;

        try {
            const airlineModelRes = await AirlineModel.findOneAndDelete({ _id : id });

            if(!airlineModelRes) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true
                };

                console.log(rbody); 

                rstatus = 404;
            } 
            else {
                rbody = {
                    data : {message: "trainer is Deleted successfully."},
                    isError: false
                }; 

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in deleting trainer.\n${error}`},
                isError: true
            };

            console.log(rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }  

    readAll = async (request, response) => {
        let rbody = {};
        let rstatus = 200;

        try {
            const airlineDocs = await AirlineModel.find().lean();

            rbody = {
                data : airlineDocs,
                isError: false
            };
            
            console.log(rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in reading all trainers.\n${error}`},
                isError: true
            };

            console.log(rbody);

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);  
    }
    
    readById = async (request, response) => {
        const id = request.params.id;

        let rbody = {};
        let rstatus = 200;

        try {
            const airlineDoc = await AirlineModel.findOne({ _id : id }).lean(); 

            if(!airlineDoc) {
                rbody = {
                    data : {"message" : "trainer is not found"},
                    isError: true
                };

                 console.log(rbody);

                rstatus = 404;
            }
            else {
                rbody = {
                    data : airlineDoc,
                    isError: false
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in reading trainer.\n${error}`},
                isError: false
            };

             console.log(rbody);  

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

}

module.exports = AirlinesController;