const dbService = require("../services/db.service");


const createData = async(req,res,schema) =>{
    try{
        const data = req.body;
        const dbRes = await dbServices.createNewRecord(data,schema)
        res.status(200).json({
            message : "Data inserted sucessfully",
            success : true,
            data : dbRes
        })
    }catch(error){
        if(error.code === 11000){
            res.status(422).json({
            message : "Email Already exists",
            success : false,
            error
            })

        }
        else{
            res.status(500).json({
            message : "Internal server error",
            success : false,
            error
            })
        }
    }
}