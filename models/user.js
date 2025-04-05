import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
})

export default User;
