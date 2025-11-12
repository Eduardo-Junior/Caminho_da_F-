import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

export const Atributos = sequelize.define('Atributos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
});

