import { sequelize } from "../database/db.js";
import { Ramal } from "./ramalModel.js";
import { Pousada } from "./pousadaModel.js";
import { Attributes } from "./attributesModel.js";
import { Payments } from "./paymentMethodsModel.js";

Ramal.hasMany(Pousada, { foreignKey: "ramalId", as: "pousadas" });

Pousada.belongsTo(Ramal, { foreignKey: "ramalId", as: "ramal" });

Pousada.belongsToMany(Attributes, {
  through: "PousadaAtributos",
  as: "atributos",
  foreignKey: "pousadaId",
});

Attributes.belongsToMany(Pousada, {
  through: "PousadaAtributos",
  as: "pousadas",
  foreignKey: "atributoId",
});

Pousada.belongsToMany(Payments, {
  through: "PousadaPagamentos",
  as: "pagamentos",
  foreignKey: "pousadaId",
});

Payments.belongsToMany(Pousada, {
  through: "PousadaPagamentos",
  as: "pousadas",
  foreignKey: "pagamentoId",
});

export { sequelize, Ramal, Pousada, Attributes, Payments };

