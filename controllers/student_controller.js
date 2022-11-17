const Student =require("../models/student")
const Laptops =require("../models/laptops")

const add = async(req,res)=>{
    try {
        const resp = await Student.create(req.body, {
            include: [
                {
                    model: Laptops,
                },
            ],
        });
    res.status(200).json({
        status:"success",
        response:resp,
        message:"record inserted successfully"
    })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
};

const find = async(req,res)=>{
    try {
        const resp = await Student.findOne({
            where:{
            id: req.params.id
             },
             include: Laptops,
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record fetched successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
};

const updatestudt = async(req,res)=>{
    try {
        const resp = await Student.update(req.body,{
            where:{
            id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record updated successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const updatelaptop = async(req,res)=>{
    try {
        const resp = await Laptops.update(req.body,{
            where:{
            lap_id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record updated successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const removestudent = async(req,res)=>{
    try {
        const resp = await Student.destroy({
            where:{
            id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record deleted successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const removelaptop = async(req,res)=>{
    try {
        const resp = await Laptops.destroy({
            where:{
            lap_id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record deleted successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}


module.exports = {add,find, updatestudt,updatelaptop, removestudent,removelaptop}

