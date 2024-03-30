
const UserModel = require('../models/usermodel');
const Sequelize = require('sequelize');
const UserController=()=>{}

UserController.listarUsuarios = async (request, response) => {
    try {
        const users = await UserModel.findAll({})
        response.status(200).json({
            users:users,
        })
    } catch (error) {
        response.status(500), json({
            message:'Ocurrio algun error'
        })
        console.log(`${error}`);
    }
}


module.exports=UserController