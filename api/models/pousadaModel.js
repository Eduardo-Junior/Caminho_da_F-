import {sequelize} from '../database/db.js';
import {DataTypes} from 'sequelize';

export const Pousada = sequelize.define('Pousada', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contact: { 
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contactName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    minCost: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hasCredential: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    kmRef: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

});
