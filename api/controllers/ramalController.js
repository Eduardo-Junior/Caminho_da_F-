import { Ramal, Pousada } from '../models/index.js';


export const findRamais = async (req, res) => {
    try {
        const ramais = await Ramal.findAll({
            include: [{ model: Pousada, as: 'pousadas' }]
        });
        res.json(ramais); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar ramais" });
    }
};

export const createRamal = async (req, res) => {
    try {
        const { cityRegion } = req.body;
        const newRamal = await Ramal.create({ cityRegion });
        res.status(201).json(newRamal);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar ramal" }); 
    }   
};

export const updateRamal = async (req, res) => {
    try {
        const { id } = req.params;
        const { cityRegion } = req.body;
        const ramal = await Ramal.findByPk(id);
        if (!ramal) {
            return res.status(404).json({ error: "Ramal não encontrado" });
        }
        ramal.cityRegion = cityRegion;
        await ramal.save();
        res.json(ramal);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar ramal" });
    }   
};


export const deleteRamal = async (req, res) => {
    try {
        const { id } = req.params;
        await Ramal.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar ramal" });
    }   
};