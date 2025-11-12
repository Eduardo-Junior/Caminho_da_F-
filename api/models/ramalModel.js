import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';


export const Ramal = sequelize.define('Ramais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cityRegion: {
        type: DataTypes.STRING,
        allowNull: false
    },
});