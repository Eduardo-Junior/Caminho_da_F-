import { Attributes } from "../models/attributesModel.js";

export const findAttributes = async (req, res) => {
    try {
        const attributes = await Attributes.findAll();
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar atributos" });
    }
};

export const createAttributes = async (req, res) => {
    try {
        const { name } = req.body;
        const newAttribute = await Attributes.create({ name });
        res.status(201).json(newAttribute);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar atributo" });
    }   
};

export const updateAttributes = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
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
};
export const deleteAttributes = async (req, res) => {
    try {
        const { id } = req.params;
        await Attributes.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar atributo" });
    }   
};