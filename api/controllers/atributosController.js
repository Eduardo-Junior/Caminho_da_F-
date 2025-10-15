import { Atributos } from "../models/atributtesModel.js";

export const findAtributos = async (req, res) => {
    try {
        const atributos = await Atributos.findAll();
        res.json(atributos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar atributos" });
    }
};

export const createAtributos = async (req, res) => {
    try {
        const { name } = req.body;
        const newAtributo = await Atributos.create({ name });
        res.status(201).json(newAtributo);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar atributo" });
    }   
};

export const deleteAtributo = async (req, res) => {
    try {
        const { id } = req.params;
        await Atributos.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar atributo" });
    }   
};