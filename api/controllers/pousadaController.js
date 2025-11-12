import { Attributes } from "../models/attributesModel.js";
import { Pousada } from "../models/pousadaModel.js";
import { Payments } from "../models/paymentMethodModel.js";


export const getPousadas = async (req, res) => {
    try {
        const pousadas = await Pousada.findAll({
            include: [{ model: Attributes, as: 'atributos' }],
            include: [{ model: Payments, as: 'pagamentos'}]
        });
        res.json(pousadas); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar pousadas" });
    }
};

export const createPousada = async (req, res) => {
    try {
        const { name, city, state, address, type, contact, contactName, minCost, hasCredential, kmRef  } = req.body;
        const newPousada = await Pousada.create({ name, city, state, address, type, contact, contactName, minCost, hasCredential, kmRef, include: [{ model: Attributes, as: 'atributos' }] , include: [{ model: Payments, as: 'pagamentos'}]});
        res.status(201).json(newPousada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pousada" });
    }   
};

export const updatePousada = async (req, res) => {
    try {
        
        const attribute = await Attributes.findByPk(id);
        if (!attribute) {
            return res.status(404).json({ error: "Atributo não encontrado" });
        }
        attribute.name = name;
        await attribute.save();
        res.json(attribute);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar atributo" });
    }   

export const deletePousada = async (req, res) => {
    try {
        const { id } = req.params;
        await Pousada.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar pousada" });
    }   
};