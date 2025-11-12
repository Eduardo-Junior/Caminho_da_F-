import { Pousada, Attributes, Payments } from "../models/index.js";


export const findPousadas = async (req, res) => {
  try {
    const pousadas = await Pousada.findAll({
      include: [
        { model: Attributes, as: "atributos" },
        { model: Payments, as: "pagamentos" },
      ],
    });
    res.json(pousadas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao recuperar pousadas" });
  }
};

export const createPousada = async (req, res) => {
  try {
    const {
      name,
      city,
      state,
      adress,
      type,
      contact,
      contactName,
      minCost,
      hasCredential,
      kmRef,
      atributos,
      pagamentos,
      ramalId,
    } = req.body;

    const novaPousada = await Pousada.create({
      name,
      city,
      state,
      adress,
      type,
      contact,
      contactName,
      minCost,
      hasCredential,
      kmRef,
      ramalId,
    });

    if (atributos && atributos.length) {
      await novaPousada.setAtributos(atributos);
    }
    if (pagamentos && pagamentos.length) {
      await novaPousada.setPagamentos(pagamentos);
    }

    if (ramalId) {
      await novaPousada.setRamal(ramalId);
    }

    const pousadaComRelacionamentos = await Pousada.findByPk(novaPousada.id, {
      include: [
        { model: Attributes, as: "atributos" },
        { model: Payments, as: "pagamentos" },
      ],
    });

    res.status(201).json(pousadaComRelacionamentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar pousada" });
  }
};

export const updatePousada = async (req, res) => {
  try {
    const { id } = req.params;
    const pousada = await Pousada.findByPk(id);

    if (!pousada) {
      return res.status(404).json({ error: "Pousada não encontrada" });
    }

    await pousada.update(req.body);
    res.json(pousada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar pousada" });
  }
};

export const deletePousada = async (req, res) => {
  try {
    const { id } = req.params;
    await Pousada.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar pousada" });
  }
};
