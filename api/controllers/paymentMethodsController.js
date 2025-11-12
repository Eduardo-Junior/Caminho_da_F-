import { Payments } from "../models/paymentMethodsModel.js";

export const findPaymentMethod = async (req, res) => {
    try {
        const paymentMethods = await PaymentMethods.findAll();
        res.json(paymentMethods);
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar métodos de pagamento" });
    }
};

export const createPaymentMethod = async (req, res) => {
    try {
        const { name } = req.body;
        const newPaymentMethod = await Payments.create({ name });
        res.status(201).json(newPaymentMethod);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar métodos de pagamentos" });
    }   
};

export const updatePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const paymentMethod = await Payments.findByPk(id);
        if (!paymentMethod) {
            return res.status(404).json({ error: "Método de pagamento não encontrado" });
        }
        paymentMethod.name = name;
        await paymentMethod.save();
        res.json(paymentMethod);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar métodos" });
    }   

export const deletePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        await Payments.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar método" });
    }   
};